var del = require('del');
var path = require('path');

var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack-build');

var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['clean', 'nodemon:app', 'sass:watch', 'build-cli-dev']);

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('clean:js', function(cb) {
  del(['build/js'], cb);
});

gulp.task('clean:css', function(cb) {
  del(['build/css'], cb);
});

gulp.task('nodemon:app', ['clean:js'], function () {
  nodemon({
    script: './start.js',
    ignore: ['build/**'],
    ext: 'js',
    env: {
      NODE_PATH: __dirname
    }
  });
});

gulp.task('webpack:dev', ['clean:js'], function() {
  gulp.src(path.resolve(webpackConfigPath))
      .pipe(webpack.run());
});

gulp.task('build-cli-dev', ['webpack:dev'], function() {
  gulp.watch([
    './app/stores/**/*.js',
    './app/components/**/*.js',
    './app/mixins/**/*.js',
    './app/pages/**/*.js',
    './app/actions/**/*.js'
  ], ['webpack:dev']);
});

gulp.task('sass', ['clean:css'], function() {
  gulp.src('./app/styles/application.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'))
});

gulp.task('sass:watch', ['sass'], function() {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
});
