export default function partOne(data: number[]): number {
  let product = 0;
  data.forEach((num) => {
		const potential = 2020 - num;
    if (data.includes(potential)) {
			product = num * potential;
    }
  });
  return product;
}
