var path = require('path');

var entryPath = './src/js/main.js';
var jsPath = path.join(__dirname, 'src', 'js');

module.exports = {
  resolve: {
    root: [
      path.resolve('./src/js'),
      path.resolve('./src/scss'),
    ],
    extensions: ['', '.js']
  },
  entry: entryPath,
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: jsPath,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: jsPath,
        loaders: ['react-hot', 'jsx', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
