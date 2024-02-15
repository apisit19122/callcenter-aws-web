const path = require('path');

module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.js',
  },
  target: 'node',
};