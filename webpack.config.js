var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './source/Vector2d.js',
	mode: 'development',
	output: {
		path: path.join(__dirname, './'),
		filename: 'index.js',
		library: 'Vector2d',
		libraryTarget: 'umd',
		globalObject: 'this',
		libraryExport: 'default'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	optimization: {
		minimizer: [
			// we specify a custom UglifyJsPlugin here to get source maps in production
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: true,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	}
};
