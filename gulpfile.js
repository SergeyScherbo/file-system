'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('dev/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dest/css'));
});

gulp.task('copy-html', function() {
  return gulp.src('dev/*.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: './dest'
  });

  gulp.watch('dev/scss/*.scss', ['styles']).on('change', browserSync.reload);
  gulp.watch('dev/*.html', ['copy-html']).on('change', browserSync.reload);
});
