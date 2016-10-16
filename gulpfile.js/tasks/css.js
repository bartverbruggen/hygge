var config = require('../../gulp.config');
if(!config.tasks.css) return;

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var handleErrors = require('../lib/handleErrors');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var path = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
};

var cssTask = function () {
  var processors = [
    autoprefixer(config.tasks.css.postcss.autoprefixer),
    cssnano(config.tasks.css.postcss.cssnano),
  ];
  return gulp.src(paths.src)
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('css', cssTask);
module.exports = cssTask;
