const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/main.js',

  mode: 'development',

  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/client'),
    clean: true
  },

  devServer: {
    static: path.resolve(__dirname, '../../dist/client'),
    port: 8080,
    hot: true,
    open: true
  },

  plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public' }
        ]
      })
    ]
};