const path = require("path");
const webpackBase = require("./webpack.base.js");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
	...webpackBase,
	entry: "./src/client", // 打包入口文件
	output: {
		path: path.resolve(__dirname, "public"), // 打包输出目录
		filename: "js/bundle.[hash:8].js", // 打包输出文件名
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["**/js/*"], 
		}),
	],
};
