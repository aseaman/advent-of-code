import partOne from "./part-one";
import partTwo from "./part-two";
import { loadData } from "../util/file-helpers";

export default function run(): void {
	loadData("day06", "data").then((data) => {
		console.group("Day Six");
		console.log("Part One", partOne(data));
		console.log("Part Two", partTwo(data));
		console.groupEnd();
	});
}
