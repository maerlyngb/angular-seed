'use strict';

var connect = require('gulp-connect');

module.exports = function (gulp, APP_DIR) {
    return function () {
        connect.server({
            root: APP_DIR,
            port: 8000,
            livereload: false
        });
    };
};