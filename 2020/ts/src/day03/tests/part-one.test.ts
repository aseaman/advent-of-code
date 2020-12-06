import partOne from "../part-one";

describe("Day Three : Part One", () => {
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
    expect(partOne(testData)).toBe(7);
  });
});
