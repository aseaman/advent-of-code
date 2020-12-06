import partOne from "../part-one";

describe("Day One", () => {
  it("should handle simple test case", () => {
    const testData = [
			{
				min: 1,
				max: 3,
				key: 'a',
				password: 'abcde'
			},
			{
				min: 1,
				max: 3,
				key: 'b',
				password: 'cdefg'
			},
			{
				min: 2,
				max: 9,
				key: 'c',
				password: 'cccccccc'
			}
		];
    expect(partOne(testData)).toBe(2);
  });
});
