// Generate CSS and image for the sprite and move them to the distribution folder

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import buffer from 'vinyl-buffer';
import merge from 'merge-stream';
import spritesmith from 'gulp.spritesmith';
import csso from 'gulp-csso';

function sprite() {

    let spriteConfiguration = {
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        imgPath: '../images/sprite/sprite.png',
        imgOpts: {quality: 75},
        cssOpts: {
            cssSelector: function (sprite) {
                return '.' + 'sprite-' + sprite.name;
            }
        },
        padding: 10,
        retinaSrcFilter: './src/images/sprite/*@2x.png',
        retinaImgPath: '../images/sprite/sprite-2x.png',
        retinaImgName: 'sprite-2x.png'
    }

    let spriteData = gulp.src('./src/images/sprite/*.png').pipe(spritesmith(spriteConfiguration));

    let imgStream = spriteData.img
        .pipe(plumber())
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/sprite'));

    let cssStream = spriteData.css
        .pipe(plumber())
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));

    return merge(imgStream, cssStream);
}

module.exports = {
    sprite
}