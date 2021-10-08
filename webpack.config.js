const path = require('path');
// const MyWebpackPlugin = require('./my-webpack-plugin')
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports =  {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve('./my-webpack-loader.js')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|webp)$/i,
      //   // use: ['file-loader']
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: 'dist/',
      //     name: '[name].[ext]?[hash]'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: 'url-loader',
        options: {
          //publicPath: 'dist/',
          name: '[name].[ext]?[hash]',
          limit: 20000,  // 2kb
        }
      }
    ]
  },
  plugins: [
    // new MyWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
        Author : ${childProcess.execSync('git config user.name')}
      `
    }),
    new webpack.DefinePlugin({
      TWO: '1+1',
      STRING: JSON.stringify('1+1'),
      'api.domain': JSON.stringify('http://dev.api.domain.com')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '(운영용)'
      },
      minify: process.env.NODE_ENV === 'production'? {
        collapseWhitespace: true,
        removeComments: true,
      } : false
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
      : []
    )  
  ]
}