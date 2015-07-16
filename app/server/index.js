// Node imports

import path from 'path';

// Server imports

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import loadDatabase from 'app/helpers/loadDatabase';

// Flux/React imports

import React from 'react';

// App imports

import app from 'app/app';

import registerServices from 'app/helpers/registerServices';
import appHandler from './handler';

app.root = path.resolve(__dirname, '..');

let fetchr = registerServices(app);

// Server stuff

const server = express();

server.set('state namespace', 'App');

server.use(bodyParser.json());
server.use(cookieParser());

server.use('/public', express.static(path.join(__dirname, '../../build')));
server.use('/public', express.static(path.join(__dirname, '../../public')));

server.use(fetchr.getXhrPath(), fetchr.getMiddleware());

server.use(appHandler(app));

loadDatabase((err, models) => {
  if(err) {
    throw err;
  }

  global.db = models;

  const port = process.env.PORT || 4000;
  server.listen(port);
  console.log('Listening on port ' + port);
});

export default server;
