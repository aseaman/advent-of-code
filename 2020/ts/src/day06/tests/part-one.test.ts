import { parse } from "../part-one";
import partOne from "../part-one";

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

describe("Day Six : Part One", () => {
  it("can parse the input data", () => {
    const expected = [
      { a: 1, b: 1, c: 1, members: 1 },
      { a: 1, b: 1, c: 1, members: 3 },
      { a: 2, b: 1, c: 1, members: 2 },
      { a: 4, members: 4 },
      { b: 1, members: 1 },
    ];
    const result = parse(data);

    expect(result.length).toBe(expected.length);
    expect(result[0]["a"]).toBe(expected[0]["a"]);
    expect(result[2]["a"]).toBe(expected[2]["a"]);
    expect(result[4]["b"]).toBe(expected[4]["b"]);

    expect(result[0]['members']).toBe(expected[0]['members']);
    expect(result[1]['members']).toBe(expected[1]['members']);
    expect(result[2]['members']).toBe(expected[2]['members']);
    expect(result[3]['members']).toBe(expected[3]['members']);
    expect(result[4]['members']).toBe(expected[4]['members']);
	});
	
  it("can add the group responses", () => {
    expect(partOne(data)).toBe(11);
  });
});
