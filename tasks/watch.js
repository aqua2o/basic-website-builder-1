// Watch for any changes(html, CSS and JS files) and update the related distributed file accordingly

import gulp from 'gulp';
import {
    style
} from './style';
import {
    script
} from './script';

import {
    template
} from './template';

function filesWatcher() {
    gulp.watch("src/html/**/*.html", template);
    gulp.watch("src/scss/**/*.scss", style);
    gulp.watch("src/js/**/*.js", script);
    return new Promise(resolve => resolve());
}

module.exports = {
    filesWatcher
}