import { Parsed } from '../types/parsed-passwords';

export default function partOne(data: Parsed[]): number {
	let valid = 0;
	data.forEach(record => {
		if (record) {
			const pattern = new RegExp(record.key, 'g');
			const matched = record.password.match(pattern) || [];
			if (matched.length >= record.min && matched.length <= record.max) {
				valid++;
			}
		}
	});
	return valid;
}