var path = require("path");
module.exports = {
	//cache: true,
	entry: {
		mmm: "./app/mmm",
		//nnn: "./app/nnn"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	module: {
		loaders: [
		]
	}
};
