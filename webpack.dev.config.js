/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const commonConfig = require('./webpack.config')

const devServerHost = process.env.DEV_SERVER_HOST || 'localhost'
const devServerPort = Number(process.env.DEV_SERVER_PORT) || 8080

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: devServerHost,
    port: devServerPort,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
})
