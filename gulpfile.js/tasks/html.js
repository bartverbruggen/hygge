var config = require('../../gulp.config');
if(!config.tasks.html) return;

var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var gulp = require('gulp');
var path = require('path');

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, '/**/*.{' + config.tasks.html.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.html.dest)
};

var fontsTask = function() {
  return gulp.src([paths.src, '*!README.md'])
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('html', fontsTask);
module.exports = fontsTask;
