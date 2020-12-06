import partTwo from "../part-two";

describe("Day Two", () => {
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
				password: 'ccccccccc'
			}
		];
    expect(partTwo(testData)).toBe(1);
  });
});
