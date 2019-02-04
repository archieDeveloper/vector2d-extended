var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/Vector2d.ts',
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
    rules: [{
      // Include ts, tsx, js, and jsx files.
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
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
