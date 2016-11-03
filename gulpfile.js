/**
 * @file gulpfile
 * @author leon <ludafa@outlook.com>
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const babelHelpers = require('gulp-babel-external-helpers');
const stylus = require('gulp-stylus');
const nib = require('nib');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(babelHelpers('babelHelpers.js', 'umd'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
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

gulp.task('build', ['babel', 'stylus', 'css']);

gulp.task('default', ['build']);
