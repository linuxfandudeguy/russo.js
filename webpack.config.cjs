const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
    library: 'russo',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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
          output: {
            ascii_only: true, 
          },
        },
        extractComments: false, 
      }),
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
/*
 * Russo.js - ISO 9-based Cyrillic to Latin transliteration
 * Created in 2025
 * Licensed under the MIT License
 * GitHub: https://github.com/linuxfandudeguy/russo.js
 */
      `,
      raw: true, // Ensures the banner is added as a raw comment block
    }),
  ],
};
