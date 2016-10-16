var config = require('../../gulp.config');
var gulp = require('gulp');
var path = require('path');
var watch = require('gulp-watch');

var watchTask = function() {
  var watchableTasks = ['fonts', 'images', 'svgSprite', 'html', 'css'];

  for (var i = 0, len = watchableTasks.length; i < len; i++) {
    var taskName = watchableTasks[0];
    var task = config.tasks[taskName];

    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      watch(glob, function() {
       require('./' + taskName)();
      });
    }
  }
};

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
