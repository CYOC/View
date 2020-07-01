import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Part } from "@cyoc/model";
import { cssBackgroundProps } from "./utility";
import { UISection } from "./UISection";

interface UIPartState {
}

export class UIPart extends Component<Part, UIPartState> {
	public constructor(props: Readonly<Part>) {
		super(props);
	}

	public render(): ReactNode {
		const topStyle: CSSProperties = { };
		if (this.props.background != null) {
			Object.assign(topStyle, cssBackgroundProps(this.props.background));
		}

		return (
			<div style={topStyle}>
				{ this.props.sections.map(p => <UISection key={p.name} {...p}/>) }
			</div>
		);
	}
}