const path = require('path');

module.exports = {
  entry: './src/index.js',  
  output: {
    filename: 'bundle.js',  // the output file name
    path: path.resolve(__dirname, 'dist'),  // the output directory
    library: 'russo',  
    libraryTarget: 'umd',  
    umdNamedDefine: true, 
    globalObject: 'this',  
  },
  mode: 'production',  
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
};
