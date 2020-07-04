import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { Choice } from "@cyoc/model";
import { imageURI, cssBorderProps } from "../utility";

type UIChoiceProperties = Choice & {
	style?: CSSProperties
};
interface UIChoiceState {
}

export class UIChoice extends Component<UIChoiceProperties, UIChoiceState> {
	public constructor(props: Readonly<UIChoiceProperties>) {
		super(props);
	}

	private image(): JSX.Element | undefined {
		if (this.props.image != null) {
			return <img src={imageURI(this.props.image)}/>;
		}
		else {
			return undefined;
		}
	}

	private description(): Array<JSX.Element> {
		if (this.props.description != null) {
			return this.props.description.split("\n").map(d => <p>{d}</p>);
		}
		else {
			return new Array<JSX.Element>();
		}
	}

	private assignBorder(style: CSSProperties): void {
		if (this.props.border != null) {
			Object.assign(style, cssBorderProps(this.props.border));
		}
	}

	public render(): ReactNode {
		const topStyle: CSSProperties = {...this.props.style};
		this.assignBorder(topStyle);

		return (
			<div style={topStyle}>
				{this.image()}
				<h3>{this.props.title}</h3>
				{this.description()}
			</div>
		);
	}
}