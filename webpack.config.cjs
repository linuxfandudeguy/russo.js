const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', // the output file name
    path: path.resolve(__dirname, 'dist'), // the output directory
    library: 'russo',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  mode: 'production',
  devtool: 'source-map', // Enable source maps for easier debugging
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // No additional Babel options needed
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    // no external dependencies
  },
  optimization: {
    minimize: true, 
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5, 
          compress: {
            drop_console: true, 
          },
        },
        extractComments: true, 
      }),
    ],
  },
};
