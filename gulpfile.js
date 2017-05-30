'use strict';

var APP_DIR = 'app/';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  gulp.src(APP_DIR + 'styles/sass/*.scss')
    .pipe(sass({style: 'expanded'}))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(APP_DIR + 'styles'));
});

gulp.task('watch', function() {
  gulp.watch(APP_DIR + 'styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);