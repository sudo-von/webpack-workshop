const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev-bundle.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin({test: /\.js(\?.*)?$/i,})],
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'dev-index.html'})
    ]
}
