const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/main.js',

  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/client'),
    clean: true
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public' }
      ]
    })
  ]
};