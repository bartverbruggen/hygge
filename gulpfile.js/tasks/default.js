var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function(cb) {
  // Don't clean just yet...
  // gulpSequence('clean', 'images', 'fonts', 'svgSprite', 'html', 'css', 'js', 'static', 'watch', cb);
  // gulpSequence('images', 'fonts', 'svgSprite', 'html', 'css', 'js', 'static', 'watch', cb);
  gulpSequence('images', 'fonts', 'svgSprite', 'html', 'css', 'static', 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
