'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./assets/css/dev/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./assets/css/dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/dev/*.scss', ['sass']);
});
