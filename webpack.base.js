const path = require("path");
module.exports = {
	mode: "development",
	watch: true, // 监听文件变化 自动打包 热更新x
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // 别名配置
		},
		extensions: [".js", ".jsx", ".css"], // 解析文件扩展名  比如import Hello from '@/pages/Hello' 后缀名会默认匹配.js .jsx .css
	},
    
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, // 匹配js和jsx文件
				exclude:/node_modules/, // 排除node_modules目录
				use: {
					loader: "babel-loader", // 使用babel-loader
					options: {
						presets: ["@babel/preset-react"], // 预设配置
					},
				},
			},
		],
	},
};
