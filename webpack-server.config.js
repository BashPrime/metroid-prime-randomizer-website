const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/server/main.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-back.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
          }
      ]
  },
  externals: [ nodeExternals() ]
};