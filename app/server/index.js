// Node imports

import path from 'path';

// Server imports

import express from 'express';
import low from 'lowdb';
import underscoreDb from 'underscore-db';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

// Flux/React imports

import React from 'react';

// App imports

import app from 'app/app';

import registerServices from 'app/helpers/registerServices';
import appHandler from './handler';

app.root = path.resolve(__dirname, '..');

let fetchr = registerServices(app);

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

server.use(appHandler(app));

const port = process.env.PORT || 4000;
server.listen(port);
console.log('Listening on port ' + port);

export default server;
