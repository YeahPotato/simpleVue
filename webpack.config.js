const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		observer: './src/observer.js',
		dep: './src/dep.js',
		watcher: './src/watcher.js',
		compile: './src/compile.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		publicPath:"build/"
	},
	devServer: {
		port: 3332
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}

		]
	}
}
