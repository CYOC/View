import { Background } from "@cyoc/model";
import { CSSProperties } from "react";
import { imageURI } from ".";

export type CSSBackground = {
	backgroundColor: CSSProperties["backgroundColor"];
	backgroundImage?: CSSProperties["backgroundImage"];
	backgroundRepeat?: CSSProperties["backgroundRepeat"];
};
export function cssBackgroundProps(background: Background): CSSBackground {
	if (typeof background === "string") {
		return {
			backgroundColor: background
		};
	}
	else {
		const out: CSSBackground = {
			backgroundColor: background.color,
			backgroundImage: `url(${imageURI(background.src)})`
		};

		if (background.repeat == null || background.repeat === false) {
			out.backgroundRepeat = "no-repeat";
		}
		else if (background.repeat === true) {
			out.backgroundRepeat = "repeat";
		}
		else {
			if (background.repeat.x === true && background.repeat.y === true) {
				out.backgroundRepeat = "repeat";
			}
			else if (background.repeat.x === true) {
				out.backgroundRepeat = "repeat-x";
			}
			else if (background.repeat.y === true) {
				out.backgroundRepeat = "repeat-y";
			}
			else {
				out.backgroundRepeat = "no-repeat";
			}
		}
		
		return out;
	}
}