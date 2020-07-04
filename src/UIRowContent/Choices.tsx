import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { ChoiceRow } from "@cyoc/model";
import { UIChoice } from "./UIChoice";

interface ChoicesState {
}

export class Choices extends Component<ChoiceRow, ChoicesState> {
	private static readonly choiceContainerStyle: Readonly<CSSProperties> = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		alignItems: "flex-start"
	};
	private static readonly choiceStyle: Readonly<CSSProperties> = {
		flexGrow: 1,
		flexBasis: 0
	};

	public constructor(props: Readonly<ChoiceRow>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<div style={Choices.choiceContainerStyle}>
				{ this.props.choices.map(p => <UIChoice key={p.name} style={Choices.choiceStyle} {...p}/>) }
			</div>
		);
	}
}