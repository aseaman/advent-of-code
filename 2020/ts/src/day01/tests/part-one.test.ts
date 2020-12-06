import partOne from "../part-one";

describe("Day One : Part One", () => {
  it("should handle simple test case", () => {
    const testData = [1721, 979, 366, 299, 675, 1456];
    expect(partOne(testData)).toBe(514579);
  });
});
