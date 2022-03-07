const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-source-map',
  watch: true,
  // 监听模式开启时，watchOptions才有意义
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    static: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ],
    host: 'localhost',
    port: 8888,
    open: true
  },
  module: {
    rules: [
      // 编译css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      // 编译sass
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
})