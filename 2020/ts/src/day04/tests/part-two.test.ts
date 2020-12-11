import {
	validateDate,
	validateEyeColor,
	validateHairColor,
	validateHeight,
	validatePID,
} from "../part-two";
import partTwo from "../part-two";

describe("Day Four : Part Two : Date Validation", () => {
	it("can validate birthdates", () => {
		const min = 1920;
		const max = 2002;

		expect(validateDate("2002", min, max)).toBe(true);
		expect(validateDate("2003", min, max)).toBe(false);
	});

	it("can validate issue years", () => {
		const min = 2010;
		const max = 2020;

		expect(validateDate("2010", min, max)).toBe(true);
		expect(validateDate("2021", min, max)).toBe(false);
	});

	it("can validate expiration years", () => {
		const min = 2020;
		const max = 2030;

		expect(validateDate("2030", min, max)).toBe(true);
		expect(validateDate("2000", min, max)).toBe(false);
	});
});

describe("Day Four : Part Two : Height Validation", () => {
	it("can validate height", () => {
		expect(validateHeight("60in")).toBe(true);
		expect(validateHeight("190cm")).toBe(true);
		expect(validateHeight("190in")).toBe(false);
		expect(validateHeight("190")).toBe(false);
	});
});

describe("Day Four : Part Two : Eye Color Validation", () => {
	it("can validate eye color", () => {
		expect(validateEyeColor("brn")).toBe(true);
		expect(validateEyeColor("wat")).toBe(false);
	});
});

describe("Day Four : Part Two : Hair Color Validation", () => {
	it("can validate hair color", () => {
		expect(validateHairColor("#123abc")).toBe(true);
		expect(validateHairColor("#123abz")).toBe(false);
		expect(validateHairColor("123abc")).toBe(false);
	});
});

describe("Day Four : Part Two : PassportID Validation", () => {
	it("can validate passport ids", () => {
		expect(validatePID("000000001")).toBe(true);
		expect(validatePID("0123456789")).toBe(false);
	});
});

describe("Day Four : Part Two", () => {
	it("can validate a passport", () => {
		const invalidPassports = [
			{
				eyr: "1972",
				cid: "100",
				hcl: "#18171d",
				ecl: "amb",
				hgt: "170",
				pid: "186cm",
				iyr: "2018",
				byr: "1926",
			},
			{
				iyr: "2019",
				hcl: "#602927",
				eyr: "1967",
				hgt: "170cm",
				ecl: "grn",
				pid: "012533040",
				byr: "1946",
			},
			{
				hcl: "dab227",
				iyr: "2012",
				ecl: "brn",
				hgt: "182cm",
				pid: "021572410",
				eyr: "2020",
				byr: "1992",
				cid: "277",
			},
			{
				hgt: "59cm",
				ecl: "zzz",
				eyr: "2038",
				hcl: "74454a",
				iyr: "2023",
				pid: "3556412378",
				byr: "2007",
			},
		];
		const validPassports = [
			{
				pid: "087499704",
				hgt: "74in",
				ecl: "grn",
				iyr: "2012",
				eyr: "2030",
				byr: "1980",
				hcl: "#623a2f",
			},
			{
				eyr: "2029",
				ecl: "blu",
				cid: "129",
				byr: "1989",
				iyr: "2014",
				pid: "896056539",
				hcl: "#a97842",
				hgt: "165cm",
			},
			{
				hcl: "#888785",
				hgt: "164cm",
				byr: "2001",
				iyr: "2015",
				cid: "88",
				pid: "545766238",
				ecl: "hzl",
				eyr: "2022",
			},
			{
				iyr: "2010",
				hgt: "158cm",
				hcl: "#b6652a",
				ecl: "blu",
				byr: "1944",
				eyr: "2021",
				pid: "093154719",
			},
		];
		expect(partTwo(invalidPassports)).toBe(0);
		expect(partTwo(validPassports)).toBe(4);
	});
});
