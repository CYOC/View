const path = require("path");

module.exports = {
	mode: "development",
	devServer: {
		contentBase: [ path.join(__dirname, "dist") ]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
};