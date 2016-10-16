var path = require('path');

module.exports = (function() {
  // Normalizes Windows file paths to valid url paths
  return path.join.apply(this, arguments).replace(/\\/g, '/');
});
