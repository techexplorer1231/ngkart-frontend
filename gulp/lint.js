'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function (options) {
  gulp.task('lint', function () {
    return gulp.src(options.src + '/app/**/*.js')
      .pipe($.jscs());
  });
};
