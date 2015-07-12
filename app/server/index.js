// Node imports

import path from 'path';
import debugLib from 'debug';

// Server imports

import express from 'express';
import low from 'lowdb';
import underscoreDb from 'underscore-db';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

// Flux/React imports

import serialize from 'serialize-javascript';
import { navigateAction } from 'fluxible-router';
import React from 'react';

// App imports

import app from 'app/app';

import registerServices from 'app/helpers/registerServices';
import HtmlComponent from 'app/components/Html';

app.root = path.resolve(__dirname, '..');

let fetchr = registerServices(app);

const htmlComponent = React.createFactory(HtmlComponent);

const debug = debugLib('flux-tracker');

global.db = low(path.join(__dirname, '../../database/db.json'), { autosave: false });
global.db._.mixin(underscoreDb);

// Server stuff

const server = express();

server.set('state namespace', 'App');

server.use(bodyParser.json());
server.use(cookieParser());

server.use('/public', express.static(path.join(__dirname, '../../build')));
server.use('/public', express.static(path.join(__dirname, '../../public')));

server.use(fetchr.getXhrPath(), fetchr.getMiddleware());

server.use((req, res, next) => {
  let context = app.createContext();

  debug('Executing navigate action');
  context.getActionContext().executeAction(navigateAction, {
      url: req.url
  }, (err) => {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        next();
      } else {
        next(err);
      }
      return;
    }

    debug('Exposing context state');
    const exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

    debug('Rendering Application component into html');
    const html = React.renderToStaticMarkup(htmlComponent({
      context: context.getComponentContext(),
      state: exposed,
      markup: React.renderToString(context.createElement())
    }));

    debug('Sending markup');
    res.type('html');
    res.write('<!DOCTYPE html>' + html);
    res.end();
  });
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);

export default server;
