const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    watch: true,
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: 8080,
      files: ['./*.html'], // watch for files to reload
      server: { baseDir: ['./'] } // directory being served
    }),
    new CleanWebpackPlugin(['dist']),
  ]
}