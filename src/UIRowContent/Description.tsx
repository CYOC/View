import { Component, ReactNode, CSSProperties } from "react";
import * as React from "react";
import { DescriptionRow, RelativePosition } from "@cyoc/model";
import { stringHash, imageURI } from "../utility";

interface DescriptionState {
}

export class Description extends Component<DescriptionRow, DescriptionState> {
	private static flexDirectionForImagePosition(position: RelativePosition): CSSProperties["flexDirection"] {
		if (position === "left" || position === "right") {
			return "row";
		}
		else {
			return "column";
		}
	}
	private static isImageBeforeText(position: RelativePosition): boolean {
		return position === "above" || position === "left";
	}

	public constructor(props: Readonly<DescriptionRow>) {
		super(props);
	}

	private text(): JSX.Element {
		return (
			<div>
				{ this.props.text.split("\n").map(t => <p key={stringHash(t)}>{t}</p>) }
			</div>
		);
	}

	private imageContent(src: string, position: RelativePosition): JSX.Element {
		if (Description.isImageBeforeText(position)) {
			return (
				<>
					<img src={imageURI(src)}/>
					{ this.text() }
				</>
			);
		}
		else {
			return (
				<>
					{ this.text() }
					<img src={imageURI(src)}/>
				</>
			);
		}
	}

	private content(): JSX.Element {
		let wrapperStyle: CSSProperties = { };
		let innerContent: JSX.Element;

		if (this.props.image != null) {
			Object.assign(
				wrapperStyle,
				{
					display: "flex",
					flexDirection: Description.flexDirectionForImagePosition(this.props.image.position)
				}
			);
			innerContent = this.imageContent(this.props.image.src, this.props.image.position);
		}
		else {
			innerContent = this.text();
		}

		return (
			<div style={wrapperStyle}>
				{ innerContent }
			</div>
		);
	}
	
	public render(): ReactNode {
		return (
			<>
				{ this.props.heading != null ? <h2>{this.props.heading}</h2> : null }
				{ this.content() }
			</>
		);
	}
}