// Main webpack configuration

import path from 'path'

let config = {
    mode: "production",
    entry: {
        'homepage': './js/homepage.js',
        'categorypage': './js/categorypage.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../src')
    },
    context: path.resolve(__dirname, '../src')
}

module.exports = {
    config
}