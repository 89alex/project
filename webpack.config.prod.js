var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //devtool: 'source-map',
  entry: {
    main: './src/main.js'
    //vendors: ['react','jquery']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'static/scripts/bundle.js',
    publicPath: 'dist/'
  },
  babel: {
    presets: ['es2015', 'stage-0', 'react']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("static/styles/styles.css")
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity) // 这是第三方库打包生成的文件
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname,'/src')
      },
      {
        test : /\.(less|css)$/,
        loader: ExtractTextPlugin.extract("style-loader","css!less")
      },
      /*{
        test: /\.scss$/, 
        loader: "style!css!sass"
      },
      {
        test: /\.less$/, 
        loader: "style!css!less"
      },*/
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  }
};
