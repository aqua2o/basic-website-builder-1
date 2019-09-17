// NodeJS entry point, this files replaces the gulpfile.js file and manages the two macro-tasks: building the ui and watching for changes

import gulp from 'gulp';

import {
    style
} from './style';

import {
    filesWatcher
} from './watch';

import {
    script
} from './script';

import {
    template
} from './template';

import {
    images
} from './images';

import {
    sprite
} from './sprite';

import {
    fonts
} from './fonts';

import {
    manifest
} from './manifest'

import {
    initServerAndReload
} from './browserRefresh'

export const build = gulp.series(template, images, script, style, sprite, fonts, manifest);
export const watchFiles = gulp.parallel(filesWatcher, initServerAndReload);