export default function partOne(data: string[]): number {
  let x = 3;
  let trees = 0;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i + 1][x] === "#") {
      trees++;
    }
    x = (x + 3) % data[i + 1].length;
  }

  return trees;
}
