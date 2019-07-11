const gulp = require('gulp')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const newer = require('gulp-newer')
const through = require('through2')
const log = require('gulp-util').log
const colors = require('gulp-util').colors
const relative = require('path').relative

const src = 'packages/*/src/**/*.js'
const dest = 'packages/'

function rename (from, to) {
  return through.obj((file, enc, cb) => {
    file.origPath = file.path
    file.path = file.path.replace(from, to)
    cb(null, file)
  })
}

function logCompiling () {
  return through.obj((file, enc, cb) => {
    const inpath = relative(__dirname, file.origPath)
    const outpath = relative(__dirname, file.path)
    log(`Compiling '${colors.cyan(inpath)}' to '${colors.cyan(outpath)}'...`)
    cb(null, file)
  })
}

function build () {
  return gulp.src(src)
    .pipe(plumber())
    .pipe(rename(/packages\/(.*?)\/src\//, 'packages/$1/lib/'))
    .pipe(newer(dest))
    .pipe(logCompiling())
    .pipe(babel())
    .pipe(gulp.dest(dest))
}

function watch () {
  gulp.watch(src, build)
}

exports.build = build
exports.default = build
exports.watch = gulp.series(build, watch)
