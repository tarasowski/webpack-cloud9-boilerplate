const merge = require('webpack-merge')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
   mode: 'development',
   watch: true,
   devtool: 'inline-source-map',
   plugins: [
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: 8080,
      files: ['./src/*.html'], // watch for files to reload
      server: { baseDir: ['./dist/'] } // directory being served
    })
 ]
 })