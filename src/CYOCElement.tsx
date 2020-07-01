import { Project } from "@cyoc/model";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CYOC } from "./CYOC";
import { cssBackgroundProps } from "./utility";

export class CYOCElement {
	private element: Element;

	private project: Readonly<Project>;

	/** The CSS color associated with this CYOC project. */
	public get color(): string {
		if (typeof this.project.background === "string") {
			return this.project.background;
		}
		else {
			return this.project.background.color;
		}
	}

	public constructor(element: Element, project: Readonly<Project>) {
		this.element = element;

		this.project = project;
	}

	/**
	 * Updates the project rendered by this component,
	 * and renders the updated version.
	 */
	public updateProject(project: Readonly<Project>): void {
		this.project = project;
		this.render();
	}

	/**
	 * Renders the CYOA inside the previously provided `element`.
	 * Only updates the HTML if the `project` is different from last time.
	 */
	public render(): void {
		ReactDOM.render(
			<CYOC
				style={{ width: `${this.project.width}px`, ...cssBackgroundProps(this.project.background) }}
				name={this.project.name}
				parts={this.project.parts}/>,
			this.element
		);
	}
}