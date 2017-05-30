'use strict';

module.exports = function (gulp, APP_DIR) {
  return function () {
    return gulp.watch(APP_DIR + 'styles/sass/*.scss', ['sass']);
  };
};