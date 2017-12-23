'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  return gulp.src('dev/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dest/css'));
});

gulp.task('copy-html', function() {
  return gulp.src('dev/*.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('watch', function() {
  gulp.watch('dev/scss/*.scss', ['styles']);
  gulp.watch('dev/*.html', ['copy-html']);
});
