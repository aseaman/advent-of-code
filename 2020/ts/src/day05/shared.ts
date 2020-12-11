import { SeatLocation } from "../types/shared";

export function getRowAndColumn(location: string): SeatLocation {
	const seat = {
		column: 0,
		row: 0,
	};
	const rowKey = location.substr(0, 7);
	const colKey = location.substr(7, 3);

	let rowMin = 0;
	let rowMax = 127;
	let colMin = 0;
	let colMax = 7;

	[...rowKey].forEach((pos) => {
		const rowMinMax = rowMin + Math.floor((rowMax - rowMin) / 2);
		const rowMaxMin = rowMax - Math.floor((rowMax - rowMin) / 2);
		if (pos === "F") {
			rowMax = rowMinMax;
		} else if (pos === "B") {
			rowMin = rowMaxMin;
		} else {
			console.log("found unexpected character", rowKey, pos);
		}

		if (rowMin === rowMax) {
			seat.row = rowMin;
		}
	});

	[...colKey].forEach((pos) => {
		const colMinMax = colMin + Math.floor((colMax - colMin) / 2);
		const colMaxMin = colMax - Math.floor((colMax - colMin) / 2);

		if (pos === "L") {
			colMax = colMinMax;
		} else if (pos === "R") {
			colMin = colMaxMin;
		} else {
			console.log("found unexpected character", colKey, pos);
		}

		if (colMin === colMax) {
			seat.column = colMin;
		}
	});

	return seat;
}

export function getSeatId(column: number, row: number): number {
	return row * 8 + column;
}
