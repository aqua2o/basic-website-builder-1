// Move the fonts to the distribution folder

import gulp from 'gulp';
import plumber from 'gulp-plumber';

function fonts() {
    return gulp.src(['src/fonts/**'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/fonts'));
}

module.exports = {
    fonts
}