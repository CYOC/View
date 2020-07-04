import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Choice } from "@cyoc/model";

type UIChoiceProperties = Choice & {
	style?: CSSProperties
};
interface UIChoiceState {
}

export class UIChoice extends Component<UIChoiceProperties, UIChoiceState> {
	public constructor(props: Readonly<UIChoiceProperties>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<p style={this.props.style}>{this.props.name}</p>
		);
	}
}