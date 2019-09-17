// Build the main CSS files for development and production and move them to the distribution folder

import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const scssEntryFile = './src/scss/main.scss';
const distributionFolder = './dist/css';

function style() {
    return gulp
        .src(scssEntryFile)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distributionFolder))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(distributionFolder));
}

module.exports = {
    style
}