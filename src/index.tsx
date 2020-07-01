import { CYOCElement } from "./CYOCElement";
import { Project } from "@cyoc/model";

export function Attach(element: Element, project: Project): CYOCElement;
export function Attach(id: string, project: Project): CYOCElement;
export function Attach(a: Element | string, project: Project): CYOCElement {
	let element: Element;

	if (a instanceof Element) {
		element = a;
	}
	else {
		const foundElement = document.getElementById(a);
		if (foundElement == null) {
			throw new Error(`Could not find an element with id ${a}.`);
		}
		element = foundElement;
	}

	const cyocElement = new CYOCElement(element, project);
	cyocElement.render();
	return cyocElement;
}

export { CYOCElement };