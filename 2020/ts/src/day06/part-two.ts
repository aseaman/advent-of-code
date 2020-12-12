import { parse } from './part-one';
export default function partTwo(data: string): number {
	const parsed = parse(data);
	let total = 0;
	// return parsed.reduce((acc, curr) => acc + curr['members'], 0);
	parsed.forEach(entry => {
		const memberCount = entry['members'];
		total += Object.keys(entry).reduce((acc, curr) => {
			if (curr !== 'members' && entry[curr] === memberCount) {
				acc += 1;
			}
			return acc;
		}, 0);
	})
	return total;
}