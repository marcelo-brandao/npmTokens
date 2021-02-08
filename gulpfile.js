'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function transpile() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(postcss(autoprefixer()))
    .pipe(gulp.dest('src/css'));
};

function watch() {
  gulp.watch('src/**/*.scss', { ignoreInitial: false }, transpile);
};

exports.build = watch;
