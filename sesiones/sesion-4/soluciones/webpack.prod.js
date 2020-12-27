const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'prod-bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            }
        ]
    }
}