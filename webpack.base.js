const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// 提取css样式到生产环境
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 优化打包速度 开启多个进程同时打包
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: 5 })
// 并行压缩代码
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// const webpack = require('webpack')
// 压缩js代码 简约简洁
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
  entry: {
    main: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash:8].bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.vue', '.js', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 性能提示
  performance: {
    hints: false
  },
  // 优化
  optimization: {
    // js压缩
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 匹配js文件
        test: /\.js(\?.*)?$/i,
        // 配置属性
        terserOptions: {
          compress: {
            warnings: false,
            // 移除所有console
            drop_console: false,
            drop_debugger: true,
            // pure_funcs: ['console.log'] //移除console
          }
        }
      }),
    ],
    // 提取公共代码
    splitChunks: {
      // all、initial、async
      // async表示只从异步加载得模块（动态加载import()）里面进行拆分
      // initial表示只从入口模块进行拆分
      // all表示以上两者都包括
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      // 意味着需要2个块以上引用的包 才会被抽离出来
      minChunks: 2,
      // 生成名称的分隔符
      automaticNameDelimiter: '~',
      // 用来限制异步模块内部的并行最大请求数的
      maxAsyncRequests: 5,
      // 允许入口并行加载的最大请求数，之所以有这个配置也是为了对拆分数量进行限制，不至于拆分出太多模块导致请求数量过多而得不偿失。
      maxInitialRequests: 3,
      enforceSizeThreshold: 50000,
      // 缓存组
      cacheGroups: {
        defaultVendors: {
          name: 'vendors',
          // 缓存组中的minChunks配置优先于外层 minChunks默认为1
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          // 权重
          priority: -10,
          reuseExistingChunk: true,
        },
        // 有一个default缓存组，它会将至少有两个chunk引入的模块进行拆分
        // 由于这个是单入口文件 所以没有触发default这个缓存组
        default: {
          name: 'default',
          minChunks: 2,
          // 权重
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.js$/,
        use: ['happypack/loader?id=label']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 102400,
              name: 'img/[name]_[hash:6].[ext]',
              esModule: false
            }
          },
          {
            loader: 'image-webpack-loader',// 压缩图片
            options: {
              bypassOnDebug: true,
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'label',
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory',
          include: path.resolve(__dirname, 'src'),
        }
      ],
      threadPool: happyThreadPool
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    // 并行压缩代码
    new ParallelUglifyPlugin({
      test: /\.(js|vue)$/,
      cacheDir: 'cache',
      // 默认开启几个子进程压缩
      workerCount: 5,
      uglifyJS: {
        output: {
          // 最紧凑的输出
          beautify: false,
          // 删除所有注释
          comments: false
        },
        compress: {
          warning: false,
          drop_console: false
        }
      },
      include: path.resolve(__dirname, 'src')
    }),
    // 提取公共代码插件 
    // 根据书中的内容 这里是用commonschunkplugin 但是经过翻阅资料 插件在webpack4.0中已经被剔除了
    // 由splitchunks来代替
  ]
}