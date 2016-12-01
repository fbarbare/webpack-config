var webpack = require('webpack');

module.exports = function (processEnv) {
  var plugins = [];
  var environment = process.env.NODE_ENV || 'development';

  if (typeof processEnv === 'object') {
    processEnv.NODE_ENV = processEnv.NODE_ENV || JSON.stringify(environment)
    plugins.push(new webpack.DefinePlugin({ 'process.env': processEnv }));
  } else {
    plugins.push(new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify(environment) } }));
  }

  if (environment === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
  }

  return plugins;
};
