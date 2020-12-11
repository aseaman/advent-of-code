import { getRowAndColumn, getSeatId } from "../shared";

const data = ["FBFBBFFRLR", "BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];
const results = [
	{ col: 5, row: 44, id: 357 },
	{ col: 7, row: 70, id: 567 },
	{ col: 7, row: 14, id: 119 },
	{ col: 4, row: 102, id: 820 },
];

describe("Day Five : Shared Helpers : Seat Location", () => {
	it("can find your row and column for a seat", () => {
		data.forEach((d, i) => {
			const { column, row } = getRowAndColumn(d);
			expect(column).toBe(results[i].col);
			expect(row).toBe(results[i].row);
		});
	});

	it("can find your seat id", () => {
		data.forEach((d, i) => {
			const { column, row } = getRowAndColumn(d);
			expect(getSeatId(column, row)).toBe(results[i].id);
		});
	});
});
