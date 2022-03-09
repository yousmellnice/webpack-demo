require('babel-regenerator-runtime')
require('../lib/theme/index.css')
// import '../lib/theme/index.css'

// 统一引入测试文件
const testsContext = require.context('./test', true, /\.test$/)
testsContext.keys().forEach(testsContext)


const srcContext = require.context('../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);