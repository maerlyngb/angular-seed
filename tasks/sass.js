'use strict';

// Compile Sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

module.exports = function (gulp, APP_DIR) {
  return function () {
    gulp.src(APP_DIR + 'styles/sass/*.scss')
      .pipe(sass({
        style: 'expanded'
      }))
      .on('error', sass.logError)
      .pipe(autoprefixer())
      .pipe(cleanCSS({
        compatibility: 'ie8'
      }))
      .pipe(gulp.dest(APP_DIR + 'styles'));
  };
};