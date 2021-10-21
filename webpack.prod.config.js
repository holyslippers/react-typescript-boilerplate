
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./webpack.config')

const analyzeBundle = process.env.ANALYZE_PROD_BUNDLE === 'true'
const bundleAnalyzerPlugin = analyzeBundle ? [new BundleAnalyzerPlugin()] : []

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: 'source-map',
  plugins: [
    ...bundleAnalyzerPlugin,
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  output: {
    clean: true,
  }
})
