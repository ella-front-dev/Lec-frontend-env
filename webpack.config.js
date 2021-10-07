const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './app.js'
  },
  output: {
    path: path.resolve('./dist'),
  },
  module: {
    rules: [s
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

}