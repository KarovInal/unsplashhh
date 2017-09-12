'use strict';

let webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/src/app.js'
  },
  output: {
    path: __dirname + '/public/src/',
    filename: '[name].build.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': ['babel-preset-es2015', 'babel-preset-react']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/icons/[name].[ext]',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}