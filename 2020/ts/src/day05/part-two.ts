import { getRowAndColumn, getSeatId } from "./shared";

export default function partTwo(data: string[]): number {
	const seatIds = [];
	data.forEach((seat) => {
		const { column, row } = getRowAndColumn(seat);
		seatIds.push(getSeatId(column, row));
	});
	seatIds.sort((a, b) => {
		if (a < b) {
			return -1;
		} else if (b < a) {
			return 1;
		} else {
			return 0;
		}
	});

	let mySeatId = 0;
	let prevId = 0;
	seatIds.forEach((seatId) => {
		if (prevId + 2 === seatId) {
			mySeatId = prevId + 1;
		}
		prevId = seatId;
	});
	return mySeatId;
}
