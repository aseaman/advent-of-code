import partTwo from '../part-two';
const data = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe("Day Six : Part Two", () => {
	it("can sum all yes responses", () => {
		expect(partTwo(data)).toBe(6);
	})
})