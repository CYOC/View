import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Project } from "@cyoc/model";
import { UIPart } from "./UIPart";
import { cssBackgroundProps } from "./utility";

interface CYOCState {
}

export class CYOC extends Component<Project, CYOCState> {
	public constructor(props: Readonly<Project>) {
		super(props);
	}

	public render(): ReactNode {
		const topStyle: CSSProperties = {
			width: `${this.props.width}px`
		};
		if (this.props.background != null) {
			Object.assign(topStyle, cssBackgroundProps(this.props.background));
		}

		return (
			<div style={topStyle}>
				{ this.props.parts.map(p => <UIPart key={p.name} {...p}/>) }
			</div>
		);
	}
}