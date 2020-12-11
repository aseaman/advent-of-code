import { Passport } from "../types/parsed";

export function parsePassports(data: string): Passport[] {
	const passports = [];
	const lines = data.trim().split("\n");
	let passport: Passport = {};
	lines.forEach((line) => {
		if (line.trim().length === 0) {
			if (Object.keys(passport).length) {
				passports.push(passport);
			}
			passport = {};
		} else {
			const keyValues = line.split(" ");
			keyValues.forEach((kv) => {
				const split = kv.split(":");
				passport[split[0]] = split[1];
			});
		}
	});

	// Last passport object doesn't get added to array
	// because there is no blank line at end
	if (Object.keys(passport).length) {
		passports.push(passport);
	}
	return passports;
}
