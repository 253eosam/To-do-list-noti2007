const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			include: [path.resolve(__dirname, 'src/js')],
	// 			exclude: /node_modules/,
	// 			use: {
	// 				loader: 'babel-loader',
	// 				options: {
	// 					presets: ['@babel/preset-env'],
	// 				},
	// 			},
	// 		},
	// 	],
	// },
	devServer: {
		contentBase: path.resolve(__dirname, ''),
		compress: true,
		disableHostCheck: true,
		// host: "0.0.0.0" // default : 127.0.0.1
	},
};
