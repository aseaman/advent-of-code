import { Parsed } from "./types";

export default function partTwo(data: Parsed[]): number {
  let valid = 0;
  data.forEach((record) => {
    if (record) {
      const minMatch = record.password.substr(record.min - 1, 1) === record.key;
			const maxMatch = record.password.substr(record.max - 1, 1) === record.key;
      if ((minMatch && !maxMatch) || (!minMatch && maxMatch)) {
        valid++;
      }
    }
  });
  return valid;
}
