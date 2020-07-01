const path = require('path');

module.exports = {
  entry: {
      plugin: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};



