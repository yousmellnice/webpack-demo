

const { series, src, dest, watch } = require('gulp')
// 编译sass 文件
const sass = require('gulp-sass')
// 自动前缀： gulp-autoprefixer
const autoprefixer = require('gulp-autoprefixer')
// 压缩css
const cssmin = require('gulp-cssmin')
const gulpCssmin = require('gulp-cssmin')
// 引入浏览器热更新
const livereload = require('gulp-livereload')


// 首先通过gulp.task()注册任务
// 通过gulp.src()方法获取到想要处理的文件流
// 然后把文件流通过pipe方法导入到gulp的插件中
// 最后把经过插件处理后的流在通过pipe方法导入到gulp.dest()中
// gulp.dest()方法则把流中的内容写入到文件中。

function compile() {
  // src 将本地文件读取在gulp内存中
  return src('./src/*.scss')
  // 异步遍历scss
    .pipe(sass.sync())
    .pipe(
      // 做浏览器适配
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      })
    )
    .pipe(cssmin())
    // dest 输出到文件 将内存中数据输出到本地文件中
    .pipe(dest('../../lib/theme'))
    .pipe(livereload())
}

function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('../../lib/theme/fonts'))
}

function watchResolve() {
  livereload.listen()
  watch('./src/*.scss', compile)
}

// 将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。
exports.build = series(compile, copyfont, watchResolve)
