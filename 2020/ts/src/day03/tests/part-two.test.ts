import partTwo from "../part-two";

describe("Day Three : Part Two", () => {
  it("should handle simple test case", () => {
    const testData = [
      "..##.......",
      "#...#...#..",
      ".#....#..#.",
      "..#.#...#.#",
      ".#...##..#.",
      "..#.##.....",
      ".#.#.#....#",
      ".#........#",
      "#.##...#...",
      "#...##....#",
      ".#..#...#.#",
    ];
    expect(partTwo(testData)).toBe(336);
  });
});
