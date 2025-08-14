const path = require("path");
const webpackBase = require("./webpack.base.js");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	...webpackBase,
	entry: "./src/server", // 打包入口文件
	target: "node", // 指定打包目标环境为node 不然webpakc打包会报错 找不到node内置对象 fs path 等等
	externals: [nodeExternals()], // 排除node_modules目录
	output: {
		path: path.resolve(__dirname, "dist"), // 打包输出目录
		filename: "server.js", // 打包输出文件名
	},
};
