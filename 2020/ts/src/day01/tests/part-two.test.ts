import partTwo from "../part-two";

describe("Day One : Part Two", () => {
  it("should handle simple test case", () => {
    const testData = [1721, 979, 366, 299, 675, 1456];
    expect(partTwo(testData)).toBe(241861950);
  });
});
