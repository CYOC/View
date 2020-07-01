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

window.addEventListener(
	"load",
	() => {
		const cyocElement = CYOCView.Attach("target", { name: "CYOC View demo", width: updateWidth(0), background: printColor(0), parts: [] });
		document.addEventListener(
			"wheel",
			e => {
				const dir = -Math.sign(e.deltaY);
				cyocElement.updateProject({ name: "CYOC View demo", width: updateWidth(dir), background: printColor(dir), parts: [] });
			},
			false
		);
	},
	false
);