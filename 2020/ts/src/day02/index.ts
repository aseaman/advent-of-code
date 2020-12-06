import partOne from "./part-one";
import partTwo from "./part-two";
import { loadData } from "../util/file-helpers";
import { Parsed } from "./types";

export default function run(): void {
	loadData("day02", "data").then((data) => {
		const parsed = parse(data);
		console.group("Day Two");
    console.log("Part One: ", partOne(parsed));
    console.log("Part Two: ", partTwo(parsed));
		console.groupEnd();
  });
}

const parse = (data: string): Parsed[] => {
  const pattern = /(\d+)-(\d+)\s([a-z]):\s([a-z]+)/;
  const parsed = data
    .trim()
    .split("\n")
    .map((line) => {
      const matches = line.match(pattern);
      return {
        min: +matches[1],
        max: +matches[2],
        key: matches[3],
        password: matches[4],
      };
    });
  return parsed;
};
