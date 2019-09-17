import gulp from 'gulp';
var browserSync = require('browser-sync').create();

function initServerAndReload() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/css/*.css").on('change', reloadBrowserWindow);
    gulp.watch("dist/js/*.js").on('change', reloadBrowserWindow);
    gulp.watch("dist/*.html").on('change', reloadBrowserWindow);
}

function reloadBrowserWindow() {
    browserSync.reload();
}

module.exports = {
    initServerAndReload
}