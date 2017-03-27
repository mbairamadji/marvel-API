const path = require('path');
var webpack = require('webpack');


module.exports = {

	entry: path.resolve(__dirname, 'app') + '/src/app.js',
	
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',

	},
	watch:true,

	module: {

		loaders: [

				{
					test: /\.js$/,
					include: path.resolve(__dirname, 'app'),
					loader: 'babel-loader',
					query: {
						presets: ["es2015", "react"]
					
					}
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
					include: path.resolve(__dirname, 'app')
				},
				{
	                test: /\.(jpg|png|svg)$/,
	                loader: 'file-loader',
	                options: {
	                   name: 'images/[hash].[ext]',
               	    }
               	}
			]
		},
	devtool: 'cheap-module-eval-source-map'
	}