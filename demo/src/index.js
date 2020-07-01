import * as CYOCView from "../../lib";

let i = 75;
function printColor(dir) {
	i = (i + 15 * dir) % 360;
	return `hsl(${i}, 64%, 59%)`;
}

let w = 500;
function updateWidth(dir) {
	w += 50 * dir;
	return w;
}

const fromFile = require("./cyocProject.json");

window.addEventListener(
	"load",
	() => {
		const cyocElement = CYOCView.Attach("target", { ...fromFile, width: updateWidth(0), background: printColor(0) });
		document.addEventListener(
			"wheel",
			e => {
				const dir = -Math.sign(e.deltaY);
				cyocElement.updateProject({ ...fromFile, width: updateWidth(dir), background: printColor(dir) });
			},
			false
		);
	},
	false
);