import { Component, ReactNode } from "react";
import * as React from "react";
import { Row } from "@cyoc/model";
import { GetContent } from "./UIRowContent";

interface UIRowState {
}

export class UIRow extends Component<Row, UIRowState> {
	public constructor(props: Readonly<Row>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<div>
				{ GetContent(this.props) }
			</div>
		);
	}
}