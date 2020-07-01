import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Section } from "@cyoc/model";
import { cssBorderProps } from "./utility";

interface UISectionState {
}

export class UISection extends Component<Section, UISectionState> {
	public constructor(props: Readonly<Section>) {
		super(props);
	}

	public render(): ReactNode {
		const topStyle: CSSProperties = { };
		if (this.props.border != null) {
			Object.assign(topStyle, cssBorderProps(this.props.border));
		}

		return (
			<div style={topStyle}>
				<h3>{this.props.name}</h3>
			</div>
		);
	}
}