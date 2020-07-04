import { Component, ReactNode } from "react";
import * as React from "react";
import { ChoiceRow } from "@cyoc/model";

interface ChoicesState {
}

export class Choices extends Component<ChoiceRow, ChoicesState> {
	public constructor(props: Readonly<ChoiceRow>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<>
				<p>{this.props.name}</p>
			</>
		);
	}
}