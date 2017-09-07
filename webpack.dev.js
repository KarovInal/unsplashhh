module.exports = {
  entry: {
    app: __dirname + '/src/app.js'
  },
  output: {
    path: __dirname + '/dist/src/',
    filename: '[name].build.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": ['babel-preset-es2015', 'babel-preset-react']
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  }
}