const path = require("path");
const webpackBase = require("./webpack.base.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBase, {
	entry: "./src/client", // 打包入口文件
	output: {
		path: path.resolve(__dirname, "public"), // 打包输出目录
		filename: "js/bundle.[hash:8].js", // 打包输出文件名
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["**/js/*", "**/css/*"],
		}),
		new MiniCssExtractPlugin({
			filename: "css/style.[hash:8].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							esModule: false, // 👈 关键 ， 不要使用es解析，否则会导致样式失效。  Webpack 在处理 CommonJS 模块时，会把整个对象当成 default export，给到 import namespace fron "xx.css" 的namespace 作为对象使用
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|jpg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images",
							name: "[name].[ext]",
						},
					},
				],
			},
		],
	},
});
