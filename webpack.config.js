var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context:   path.resolve('js'),
  entry:     ['./app'],
  output:    {
    path:       path.resolve('build/'),
    publicPath: 'public/assets/',
    filename:   'mainBundle.js'
  },
  plugins:   [
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
  module:    {
    preLoaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'eslint-loader'
      }
    ],
    loaders:    [
      {
        test:   /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test:   /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test:    /\.css$/,
        exclude: /node_modules/,
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
      },
      {
        test:    /\.scss$/,
        exclude: /node_modules/,
        loader:  ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
      },
      {
        test:    /\.es6$/,
        exclude: /node_modules/,
        loader:  'babel-loader'
      }
    ]
  },
  resolve:   {
    extensions: ['', '.js', '.es6']
  }
};