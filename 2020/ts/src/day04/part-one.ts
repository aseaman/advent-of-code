import { Passport } from "../types/parsed";

const REQUIRED_KEYS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

export default function partOne(data: Passport[]): Passport[] {
	const valid = [];

	data.forEach((passport) => {
		let isValid = true;
		REQUIRED_KEYS.forEach((key) => {
			if (!passport[key]) {
				isValid = false;
			}
		});
		if (isValid) {
			valid.push(passport);
		}
	});

	return valid;
}
