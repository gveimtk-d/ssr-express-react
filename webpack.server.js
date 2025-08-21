const path = require("path");
const webpackBase = require("./webpack.base.js");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const { emit } = require("process");

module.exports = merge(webpackBase, {
	entry: "./src/server", // 打包入口文件
	target: "node", // 指定打包目标环境为node 不然webpakc打包会报错 找不到node内置对象 fs path 等等
	externals: [nodeExternals()], // 排除node_modules目录
	output: {
		path: path.resolve(__dirname, "dist"), // 打包输出目录
		filename: "server.js", // 打包输出文件名
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					{
						loader: "isomorphic-style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							esModule: false,
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
							emitFile: false,
						},
					},
				],
			},
		],
	},
});
