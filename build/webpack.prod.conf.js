const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    entry: './src/vue-awesome-skeleton.js',
    mode: 'production',
    output: {
        filename: 'vue-awesome-skeleton.js',
        libraryTarget: "commonjs2"
    },
    externals: [
        'vue'
    ]
})