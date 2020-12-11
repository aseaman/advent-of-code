import { Passport } from "../types/parsed";

const REQUIRED_KEYS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

export default function partOne(data: Passport[]): number {
	let valid = 0;

	data.forEach((passport) => {
		let isValid = true;
		REQUIRED_KEYS.forEach((key) => {
			if (!passport[key]) {
				isValid = false;
			}
		});
		if (isValid) {
			valid++;
		}
	});

	return valid;
}
