const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'bundle.[name].[contenthash].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
})
