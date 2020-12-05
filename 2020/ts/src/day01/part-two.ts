export default function partTwo(data: number[]): number {
  let product = 0;
  data.forEach((x) => {
    data.forEach((y) => {
      if (x + y < 2020) {
        const z = 2020 - x - y;
        if (data.includes(z)) {
          product = x * y * z;
        }
      }
    });
  });

  return product;
}
