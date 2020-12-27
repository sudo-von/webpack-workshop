const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        contact: path.resolve(__dirname, 'contact.js'),
        index: path.resolve(__dirname, 'index.js'),
        main: path.resolve(__dirname, 'main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev-[name]-bundle.js'
    }
}