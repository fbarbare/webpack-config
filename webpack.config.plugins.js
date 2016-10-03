var webpack = require('webpack');

module.exports = function () {
  var environment = process.env.NODE_ENV || 'development';

  var plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(environment)
      }
    })
  ];

  if (environment === 'production') {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    );
  }

  return plugins;
};
