'use strict';

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var coffeeify  = require('gulp-coffeeify');
var jade       = require('gulp-jade');
require('web-component-tester').gulp.init(gulp);


var options = {};

options['coffee'] = {
  src: './src/**/*.coffee',
  dst: './build',
  options: {
    options: {
      debug: true,
      paths: [__dirname + '/node_modules', __dirname + '/src']
    }
  }
};

options['copy'] = {
  src: './src/**/*.js',
  dst: './build'
};

options['sass'] = {
  src: './src/**/*.scss',
  dst: './build'
};

options['jade'] = {
  src: './src/**/*.jade',
  dst: './build',
  options: {
    pretty: false
  }
};

options['build-tests'] = {
  scripts: {
    src: './src/test/**/*.coffee',
    dst: './build/test'
  },
  markup: {
    src: './src/test/**/*.jade',
    dst: './build/test'
  }
};


gulp.task('default', ['build', 'watch']);
gulp.task('build', ['copy', 'coffee', 'jade', 'sass']);
gulp.task('test', ['build-tests', 'test:local']);

gulp.task('coffee', function () {
  return gulp.src(options.coffee.src)
    .pipe(coffeeify(options.coffee.options))
    .pipe(gulp.dest(options.coffee.dst));
});

gulp.task('copy', function () {
  return gulp.src(options.copy.src)
    .pipe(gulp.dest(options.copy.dst));
});

gulp.task('sass', function () {
  return gulp.src(options.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(options.sass.dst));
});

gulp.task('jade', function () {
  return gulp.src(options.jade.src)
    .pipe(jade(options.jade.options))
    .pipe(gulp.dest(options.jade.dst))
});

gulp.task('watch', function () {
  gulp.watch(options.copy.src, ['copy']);
  gulp.watch(options.coffee.src, ['coffee']);
  gulp.watch(options.sass.src, ['sass']);
  gulp.watch(options.jade.src, ['jade']);
});

gulp.task('build-tests', ['build-tests-scripts', 'build-tests-markup']);

gulp.task('build-tests-scripts', function () {
  return gulp.src(options['build-tests'].scripts.src)
    .pipe(coffeeify())
    .pipe(gulp.dest(options['build-tests'].scripts.dst));
});

gulp.task('build-tests-markup', function () {
  return gulp.src(options['build-tests'].markup.src)
    .pipe(jade(options['build-tests'].markup.src))
    .pipe(gulp.dest(options['build-tests'].markup.dst));
});