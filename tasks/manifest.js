// Move the manifest file to the distribution folder

import gulp from 'gulp';
import plumber from 'gulp-plumber';

function manifest() {
    return gulp.src(['src/manifest.json'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
}

module.exports = {
    manifest
}