var entry = require('./webpack.config.entry.js');
var output = require('./webpack.config.output.js');
var module = require('./webpack.config.module.js');
var resolve = require('./webpack.config.resolve.js');
var plugins = require('./webpack.config.plugins.js');

module.exports = function (options) {
  var sourcePath = options.sourcePath;
  var sourceFileName = options.sourceFileName;
  var destinationPath = options.destinationPath;
  var destinationFileName = options.destinationFileName;

  return {
    entry: entry(sourcePath, sourceFileName),
    output: output(destinationPath, destinationFileName),
    module: module(),
    resolve: resolve(),
    plugins: plugins()
  };
};
