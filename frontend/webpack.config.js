const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  console.log("[🐱 DDD] webpack.config.js > env mode > ", env.mode);

  return {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      clean: true,
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
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new Dotenv({
        path: env.mode ? `.env.${env.mode}` : ".env",
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname),
      publicPath: "src",
      host: "0.0.0.0", // default : 127.0.0.1
    },
  };
};
