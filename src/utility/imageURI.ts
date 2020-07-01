import { ImageURI } from "@cyoc/model";

export function imageURI(imageURI: ImageURI): string {
	if (imageURI.startsWith("http")) {
		return imageURI;
	}
	else {
		return `https://i.imgur.com/${imageURI}.png`;
	}
}