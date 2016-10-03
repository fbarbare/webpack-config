var path = require('path');

module.exports = function (folder, filename) {
  return [
    'babel-polyfill',
    path.join(folder, filename)
  ];
};
