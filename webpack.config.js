const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');

const banner = `
PACKAGE: ${packageData.name}
VERSION: ${packageData.version}
AUTHOR: ${packageData.author}

`.trim();

module.exports = {
  entry: {
      plugin: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${packageData.name}.bundle.js`
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
      new webpack.BannerPlugin({ banner })
  ]
};



