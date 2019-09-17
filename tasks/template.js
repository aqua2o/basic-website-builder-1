// Build the templates from the html components and move them to the distribution folder

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import fileinclude from 'gulp-file-include';

function template() {
    return gulp.src(['src/html/pages/*.html'])
        .pipe(plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
}

module.exports = {
    template
}