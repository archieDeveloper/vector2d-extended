path    = require 'path'
webpack = require 'webpack'

module.exports =
    entry: './source/index.coffee'
    output:
        path: path.join __dirname, './'
        filename: 'index.js'
    module:
        loaders: [
            test: /\.coffee$/, loader: 'coffee-loader'
        ]
    resolve:
        root: path.resolve './source'
        extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
    plugins: [
        new webpack.optimize.UglifyJsPlugin
    ]