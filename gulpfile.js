'use strict';

const APP_DIR = 'app/';
const gulp = require('gulp');

// loads external gulp tasks by filename
function getTask(task) {
	return require('./tasks/' + task)(gulp, APP_DIR);
}

// compile sass
gulp.task('sass', getTask('sass'));

// run app
gulp.task('serve', getTask('serve'));

// watch for file changes and do any required processing
gulp.task('watch', function() {
  gulp.watch(APP_DIR + 'styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'serve', 'watch']);