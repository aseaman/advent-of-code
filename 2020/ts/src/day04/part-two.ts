import { Passport } from "../types/parsed";
import partOne from "./part-one";

export default function partTwo(data: Passport[]): number {
	let valid = 0;
	const present = partOne(data);
	present.forEach((pp) => {
		let isValid = true;

		Object.keys(pp).forEach((key) => {
			if (key !== "cid" && !validate(key, pp[key])) {
				isValid = false;
			}
		});

		if (isValid) {
			valid++;
		}
	});
	return valid;
}

function validate(key: string, value: string) {
	let isValid = true;

	switch (key) {
		case "byr":
			isValid = validateDate(value, 1920, 2002);
			break;
		case "iyr":
			isValid = validateDate(value, 2010, 2020);
			break;
		case "eyr":
			isValid = validateDate(value, 2020, 2030);
			break;
		case "hgt":
			isValid = validateHeight(value);
			break;
		case "ecl":
			isValid = validateEyeColor(value);
			break;
		case "hcl":
			isValid = validateHairColor(value);
			break;
		case "pid":
			isValid = validatePID(value);
			break;
		default:
			isValid = false;
			break;
	}

	return isValid;
}

export function validateDate(value: string, min: number, max: number): boolean {
	const date = parseInt(value, 10);
	return date >= min && date <= max;
}

export function validateHeight(value: string): boolean {
	let isValid = false;
	const matches = value.match(/(\d+)(cm|in)/);

	if (matches === null) {
		return isValid;
	}

	if (matches[2] === "cm") {
		const hgt = parseInt(matches[1], 10);
		isValid = hgt >= 150 && hgt <= 193;
	}

	if (matches[2] === "in") {
		const hgt = parseInt(matches[1], 10);
		isValid = hgt >= 59 && hgt <= 76;
	}

	return isValid;
}

export function validateEyeColor(value: string): boolean {
	return (
		["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(value) !== -1
	);
}

export function validateHairColor(value: string): boolean {
	return RegExp("#[a-f0-9]{6}").test(value);
}

export function validatePID(value: string): boolean {
	return RegExp("^[0-9]{9,9}$").test(value);
}
