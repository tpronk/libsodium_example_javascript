const path = require('path');

module.exports = {
  entry: './src/libsodium_example.js',
  output: {
    filename: 'libsodium_example.dev.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'libsodiumExample',
    libraryExport: 'libsodiumExample',
    libraryTarget: 'window'
  },
  mode: 'development',
  optimization: {
    usedExports: true
  }
};