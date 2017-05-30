'use strict';

const APP_DIR = 'app/';
const gulp = require('gulp');

// loads external gulp tasks by filename
function getTask(task) {
	return require('./tasks/' + task)(gulp, APP_DIR);
}

gulp.task('sass', getTask('sass'));

gulp.task('watch', function() {
  gulp.watch(APP_DIR + 'styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);