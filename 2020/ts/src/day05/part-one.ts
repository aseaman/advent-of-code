import { getRowAndColumn, getSeatId } from "./shared";

export default function partOne(data: string[]): number {
	let max = 0;
	data.forEach((seat) => {
		const { column, row } = getRowAndColumn(seat);
		const id = getSeatId(column, row);
		if (id > max) {
			max = id;
		}
	});
	return max;
}
