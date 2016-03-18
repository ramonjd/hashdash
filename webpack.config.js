var path = require('path')
var webpack = require('webpack')
var WebpackErrorNotificationPlugin = require('webpack-error-notification')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  context: __dirname + '/src',
  entry: [
        './main.js'
    ],

  output: {
    filename: 'main.js',
    path: __dirname + '/build'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
    plugins: [

        //new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })

    ]
}
