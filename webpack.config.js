
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'docs/template.ejs'
    })
  ],

  devServer: {
    contentBase: 'docs/'
  }
}

