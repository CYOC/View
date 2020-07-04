import { Component, ReactNode } from "react";
import * as React from "react";
import { Choice } from "@cyoc/model";

interface UIChoiceState {
}

export class UIChoice extends Component<Choice, UIChoiceState> {
	public constructor(props: Readonly<Choice>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<p>{this.props.name}</p>
		);
	}
}