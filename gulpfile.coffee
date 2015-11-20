gulp = require 'gulp'

coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'

paths = coffee: ['source/**/*.coffee']

gulp.task 'coffee', ->
  return gulp.src paths.coffee
    .pipe coffee bare: false
    .on 'error', console.log
    .pipe concat 'index.js'
    .pipe uglify()
    .pipe gulp.dest './'

gulp.task 'watch', ->
  gulp.watch paths.coffee, ['coffee']

gulp.task 'default', ['coffee', 'watch']