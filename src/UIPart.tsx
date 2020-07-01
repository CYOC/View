import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Part } from "@cyoc/model";
import { cssBackgroundProps } from "./utility";

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
				<h2>{this.props.name}</h2>
			</div>
		);
	}
}