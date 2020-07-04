import * as React from "react";
import { Row, isHeadingRow, isDescriptionRow, isImageRow, isChoiceRow } from "@cyoc/model";
import { Heading } from "./Heading";
import { Description } from "./Description";
import { Image } from "./Image";
import { Choices } from "./Choices";

const contentMap: Array<(row: Row) => JSX.Element | null> = [
	r => isHeadingRow(r) ? <Heading {...r}/> : null,
	r => isDescriptionRow(r) ? <Description {...r}/> : null,
	r => isImageRow(r) ? <Image {...r}/> : null,
	r => isChoiceRow(r) ? <Choices {...r}/> : null
];

export function GetContent(row: Row): JSX.Element {
	for (const mapper of contentMap) {
		const content = mapper(row);
		if (content != null) {
			return content;
		}
	}

	return (
		<p>Content type not found. Error in project file.</p>
	);
}