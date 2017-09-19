'use strict';

let webpack = require('webpack');

module.exports = {
  entry: {
    app: __dirname + '/src/app.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: 'src/js/[name].build.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': ['babel-preset-es2015', 'babel-preset-react'],
              "plugins": ["transform-object-rest-spread"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './src/img/icons/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}