import { Component, ReactNode } from "react";
import * as React from "react";
import { HeadingRow } from "@cyoc/model";

interface HeadingState {
}

export class Heading extends Component<HeadingRow, HeadingState> {
	public constructor(props: Readonly<HeadingRow>) {
		super(props);
	}

	private GetLevelType(): string {
		return `h${Math.max(1, Math.min(this.props.level + 1, 6))}`;
	}

	public render(): ReactNode {
		const levelType = this.GetLevelType();
		return React.createElement(levelType, {}, this.props.text);
	}
}