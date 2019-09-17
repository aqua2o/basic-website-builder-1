// Build the js files using webpack and move them to the distribution folder
// The webpack configuration used is in the webpack.config.js file

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackstream from 'webpack-stream';
import webpackconfig from "./webpack.config";

function script() {
    return (
        gulp
        .src('/')
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(gulp.dest("dist/js/")) // folder only, filename is specified in webpack.config.js
    );
}

module.exports = {
    script
}