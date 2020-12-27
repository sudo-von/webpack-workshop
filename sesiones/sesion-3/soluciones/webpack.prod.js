const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        contact: path.resolve(__dirname, 'contact.js'),
        index: path.resolve(__dirname, 'index.js'),
        main: path.resolve(__dirname, 'main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'prod-[name]-bundle.js'
    }
}