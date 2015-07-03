var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js']
  },
  entry: './app/client/index.js',
  output: {
    path: './build/js',
    publicPath: '/public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  devtool: 'source-map',
  watch: true,
  keepalive: true
};
