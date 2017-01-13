var path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
      }
    ]
  }
}