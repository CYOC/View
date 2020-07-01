import { Component, ReactNode } from "react";
import * as React from "react";
import { Part } from "@cyoc/model";

export interface CYOCProperties {
	style?: React.CSSProperties;
	name: string;
	parts: Array<Part>;
}
interface CYOCState {
}

export class CYOC extends Component<CYOCProperties, CYOCState> {
	public constructor(props: Readonly<CYOCProperties>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<div style={this.props.style}>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}