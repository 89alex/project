var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/scripts/bundle.js',
    publicPath: '/dist/'
  },
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime', ["antd",  { "style": "css" }]]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {   
        test: /\.css$/, 
        loader: 'style-loader!css-loader?sourceMap' 
      },
      {   
        test: /\.scss$/, 
        loader: "style!css!sass?sourceMap"
      },
      {   
        test: /\.less$/, 
        loader: "style!css!less?sourceMap"
      },
      { 
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  }
};
