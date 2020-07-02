export function stringHash(string: string): number {
	let hash = 0;

	for (let i = 0; i < string.length; i++) {
		const char = string.charCodeAt(i);
		hash = ((hash * 31 + hash) + char) | 0;
	}
	
	return hash;
}