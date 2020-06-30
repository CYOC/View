import * as React from "react";
import * as ReactDOM from "react-dom";

export function Render(id: string) {
	ReactDOM.render(
		<h1>Hello World!</h1>,
		document.getElementById(id)
	);
}