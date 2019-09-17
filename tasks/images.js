// Minimise images and move them to the distribution folder

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

function images() {
    return gulp.src('src/images/**/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

module.exports = {
    images
}