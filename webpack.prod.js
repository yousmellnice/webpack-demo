const { merge, default: dist } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: 5 })
// 分析依赖图谱
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const CopyPlugin = require('copy-webpack-plugin')

//清理dist文件夹的插件，用来在每次执行构建的时候清空上次构建的结果防止文件缓存
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(base,{
  //定义环境为生产环境
	mode:'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['happypack/loader?id=css']
        use: [
          MiniCssExtractPlugin.loader,
          {loader:'css-loader'},
          {loader:'postcss-loader'},
        ]
            
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
	plugins:[
    // 复制资源到打包区域
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/asset'),
    //       to: path.resolve(__dirname, 'dist')
    //     }
    //   ],
    //   options: {
		// 		concurrency: 100,
		// 	},
    // }),
		new CleanWebpackPlugin(),
    // new HappyPack({
    //   id: 'css',
    //   loaders: [
    //     MiniCssExtractPlugin.loader,
    //     {loader:'css-loader'},
    //     {loader:'postcss-loader'},
    //   ],
    //   threadPool: happyThreadPool
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new BundleAnalyzerPlugin({
      // 生成json文件
      generateStatsFile: true,
      // 构建后自动开启分析文件
      openAnalyzer: false,
      // 分析文件生成的模式
      analyzerMode: 'static'
    })
	]
})