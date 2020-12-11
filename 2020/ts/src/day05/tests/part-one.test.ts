import partOne from "../part-one";

const data = ["FBFBBFFRLR", "BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];

describe("Day Five : Part One : Max ID", () => {
	it("can find the max seat id", () => {
		expect(partOne(data)).toBe(820);
	});
});
