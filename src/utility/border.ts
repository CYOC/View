import { Border } from "@cyoc/model";
import { CSSProperties } from "react";

export type CSSBorder = {
	borderRadius?: CSSProperties["borderRadius"];
} & ({
	border: CSSProperties["border"];
} | {
	borderTop?: CSSProperties["borderTop"];
	borderLeft?: CSSProperties["borderLeft"];
	borderRight?: CSSProperties["borderRight"];
	borderBottom?: CSSProperties["borderBottom"];
});
export function cssBorderProps(border: Border): CSSBorder {
	const borderString = `${border.thickness}px solid ${border.color}`;

	let borderProps: CSSBorder;
	if (border.presence == null) {
		borderProps = {
			border: borderString
		};
	}
	else {
		borderProps = { };
		if (border.presence.top === true) {
			borderProps.borderTop = borderString;
		}
		if (border.presence.left === true) {
			borderProps.borderLeft = borderString;
		}
		if (border.presence.right === true) {
			borderProps.borderRight = borderString;
		}
		if (border.presence.bottom === true) {
			borderProps.borderBottom = borderString;
		}
	}

	if (border.rounding != null) {
		borderProps.borderRadius = `${border.rounding}px`;
	}

	return borderProps;
}