/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputDirPath = path.resolve(process.env.OUTPUT_DIR || './dist')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: outputDirPath,
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['BACKEND_HOST']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // TODO copy assets
  ],
}
