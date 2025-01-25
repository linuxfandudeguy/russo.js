const path = require('path');

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
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: 'raw-loader', 
      },
    ],
  },
  resolve: {
    extensions: ['.js'], 
  },
  externals: {
   // Nothing should go here
  },
};
