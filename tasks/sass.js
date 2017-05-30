'use strict';

// Compile Sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

module.exports = function (gulp, APP_DIR) {
  return function () {
    return gulp.src(APP_DIR + 'styles/sass/*.scss')
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