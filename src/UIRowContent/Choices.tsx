import { Component, ReactNode } from "react";
import * as React from "react";
import { ChoiceRow } from "@cyoc/model";
import { UIChoice } from "./UIChoice";

interface ChoicesState {
}

export class Choices extends Component<ChoiceRow, ChoicesState> {
	public constructor(props: Readonly<ChoiceRow>) {
		super(props);
	}

	public render(): ReactNode {
		return this.props.choices.map(p => <UIChoice key={p.name} {...p}/>);
	}
}