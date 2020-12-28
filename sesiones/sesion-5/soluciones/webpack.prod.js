const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'prod-bundle.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({test: /\.js(\?.*)?$/i,})],
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'prod-index.html'})
    ]
}
