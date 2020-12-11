export type Password = {
	min: number;
	max: number;
	key: string;
	password: string;
};

export type Passport = {
	byr?: number;
	iyr?: number;
	eyr?: number;
	hgt?: string;
	hcl?: string;
	ecl?: string;
	pid?: string;
	cid?: string;
};
