import * as React from "react";
import { Row, isHeadingRow, isDescriptionRow } from "@cyoc/model";
import { Heading } from "./Heading";
import { Description } from "./Description";

export * from "./Heading";

const contentMap: Array<(row: Row) => JSX.Element | null> = [
	r => isHeadingRow(r) ? <Heading {...r}/> : null,
	r => isDescriptionRow(r) ? <Description {...r}/> : null
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