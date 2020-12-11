import partOne from "./part-one";
import partTwo from "./part-two";
import { loadData } from "../util/file-helpers";

export default function run(): void {
	loadData("day05", "data").then((data) => {
		console.group("Day Five");
		const parsed = parse(data);
		console.log("Part One", partOne(parsed));
		console.log("Part Two", partTwo(parsed));
		console.groupEnd();
	});
}

const parse = (data: string): string[] => data.trim().split("\n");
