import partOne from "./part-one";
import { loadData } from "../util/file-helpers";
import { parsePassports } from "../util/parse-helpers";

export default function run(): void {
	loadData("day04", "data").then((data) => {
		console.group("Day Four");
		const parsed = parsePassports(data);
		console.log("Part One", partOne(parsed));
		console.groupEnd();
	});
}
