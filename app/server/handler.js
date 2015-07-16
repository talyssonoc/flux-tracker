import React from 'react';
import serialize from 'serialize-javascript';
import { navigateAction } from 'fluxible-router';
import { createElementWithContext } from 'fluxible-addons-react';
import debugLib from 'debug';

import HtmlComponent from './Html';

import seed from 'app/helpers/seed';

export default function (app) {

  const htmlComponent = React.createFactory(HtmlComponent);

  const debug = debugLib('flux-tracker');

  return function serverHandler(req, res, next) {
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
        markup: React.renderToString(createElementWithContext(context))
      }));

      debug('Sending markup');
      res.type('html');
      res.write('<!DOCTYPE html>' + html);
      res.end();
    });
  };
}
