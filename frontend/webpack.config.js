const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
	console.log("[🐶 DDD] ~ file: webpack.config.js ~ line 6 ~ env.mode", env.mode)
	return {
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
		// 			include: [path.resolve(__dirname, 'src')],
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
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		},
		plugins: [
			new Dotenv({
				path: `.env.${env.mode}`,
			}),
		],
		devServer: {
			contentBase: path.resolve(__dirname),
			publicPath: '/',
			host: '0.0.0.0', // default : 127.0.0.1
			overlay: true,
		},
	};
};
