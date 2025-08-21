const fs = require("fs");
export const getLinks = (req) => {
	const files = fs.readdirSync("./public/css");
	const result = files
		.filter((file) => file.endsWith(".css"))
		.map((file) => `<link rel="stylesheet" href="/css/${file}"/>`)
		.join("\n");
	return result;
};
 