module.exports = function(config) {

  var webpack = require('./webpack.config');

  config.set({
    basePath: __dirname,

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['phantomjs-shim', 'mocha', 'chai'],

    files: ['tests.webpack.js'],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: webpack,

    webpackServer: {
      noInfo: true
    }
  });
};
