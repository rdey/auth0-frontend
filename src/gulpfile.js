'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('main.css'))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(cssmin())
    .pipe(gulp.dest('./styles/'));
});

gulp.task('sass-example', function () {
  return gulp.src('./example/styles/dev/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(concat('app.css'))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(cssmin())
    .pipe(gulp.dest('./example/styles/dist/'));
});

gulp.task('watch', ['sass', 'sass-example'], function () {
  gulp.watch('./styles/main.scss', ['sass', 'sass-example']);
  gulp.watch('./example/styles/dev/**/*.scss', ['sass-example']);
});
