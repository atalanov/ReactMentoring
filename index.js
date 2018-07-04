// @flow
const express = require('express');

const port = 8000;
const server = express();

if (process.env.NODE_ENV === 'development') {
    console.log('DEV');
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('./webpack');
    const compiler = webpack(webpackConfig);
    server.use(webpackDevMiddleware(compiler));
    server.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    server.use(webpackHotServerMiddleware(compiler));
  } else {
    console.log('NOT DEV');
    const serverRenderer = require('../dist/js/serverRenderer').default;
    console.log(serverRenderer);
    server.use(express.static('public'));
    server.use(serverRenderer());
  }

server.listen(port);
console.log(`Serving at http://localhost:${port}`);