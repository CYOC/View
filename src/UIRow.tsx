import { Component, ReactNode } from "react";
import * as React from "react";
import { Row } from "@cyoc/model";

interface UIRowState {
}

export class UIRow extends Component<Row, UIRowState> {
	public constructor(props: Readonly<Row>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<div>
				<h4>{this.props.name}</h4>
			</div>
		);
	}
}