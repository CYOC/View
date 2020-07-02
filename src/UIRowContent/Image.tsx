import { Component, ReactNode } from "react";
import * as React from "react";
import { ImageRow } from "@cyoc/model";
import { imageURI } from "../utility";

interface ImageState{
}

export class Image extends Component<ImageRow, ImageState> {
	public constructor(props: Readonly<ImageRow>) {
		super(props);
	}

	public render(): ReactNode {
		return (
			<img src={imageURI(this.props.src)}/>
		);
	}
}