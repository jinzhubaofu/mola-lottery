/**
 * @file gulpfile
 * @author leon <ludafa@outlook.com>
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const nib = require('nib');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const webpack = require('webpack');
const conf = require('./tools/webpack.prod');
const gutil = require('gulp-util');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

gulp.task('webpack', ['babel'], function (callback) {

    return webpack(conf, (error, stats) => {

        if (error) {
            throw new gutil.PluginError('webpack', error);
        }

        gutil.log('webpack', stats.toString());

        callback();

    });

});

gulp.task('stylus', function () {
    return gulp.src('src/**/*.styl').pipe(gulp.dest('lib'));
});

gulp.task('css', function () {
    return gulp.src('src/**/*.styl')
        .pipe(
            stylus({
                paths: [path.join(__dirname, 'node_modules')],
                compress: false,
                use: [nib()]
            })
        )
        .pipe(gulp.dest('lib'));
});

gulp.task('build', ['webpack', 'stylus', 'css']);

gulp.task('default', ['build']);
