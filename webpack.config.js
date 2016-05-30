  var path = require('path');
  var webpack = require('webpack');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');

  var commonsPlugin =
      new webpack.optimize.CommonsChunkPlugin('common.js');

  module.exports = {
  context: path.join(__dirname, '.'),
  entry: {
    app: "./app/App.js"
  },
  devtool: 'cheap-module-source-map',
  devServer: {
        contentBase: "./build",
    },
  output: {
    path: 'build',// This is where images AND js will go
    //path: path.join(__dirname, '.'),
    //filename: "bundle.js",
    publicPath: "/assets/", //path that will be considered when requiring your files
    filename: '[name].js'
  },
    plugins: [commonsPlugin,
      new ExtractTextPlugin('[name].css')
    ],//<script src="build/common.js"></script>
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
       test:  /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test   : /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test   : /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test  : /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}