var path = require('path');

module.exports = function (path, filename) {
  return [
    'babel-polyfill',
    path.join(path, filename)
  ];
};
