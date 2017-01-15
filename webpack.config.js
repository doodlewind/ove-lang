var path = require('path')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, '/demo'),
    filename: 'ove.bundle.js'
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
