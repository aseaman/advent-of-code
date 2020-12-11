export type Password = {
	min: number;
	max: number;
	key: string;
	password: string;
};

export type Passport = {
	byr?: string;
	iyr?: string;
	eyr?: string;
	hgt?: string;
	hcl?: string;
	ecl?: string;
	pid?: string;
	cid?: string;
};
