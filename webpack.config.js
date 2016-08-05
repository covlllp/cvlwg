var path = require('path');

var entryPath = './src/js/main.js';

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.scss']
  },
  entry: entryPath,
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
