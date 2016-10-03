var configEntry = require('./webpack.config.entry.js');
var configOutput = require('./webpack.config.output.js');
var configModule = require('./webpack.config.module.js');
var configResolve = require('./webpack.config.resolve.js');
var configPlugins = require('./webpack.config.plugins.js');

module.exports = function (options) {
  var sourcePath = options.sourcePath;
  var sourceFileName = options.sourceFileName;
  var destinationPath = options.destinationPath;
  var destinationFileName = options.destinationFileName;

  return {
    entry: configEntry(sourcePath, sourceFileName),
    output: configOutput(destinationPath, destinationFileName),
    module: configModule(),
    resolve: configResolve(),
    plugins: configPlugins()
  };
};
