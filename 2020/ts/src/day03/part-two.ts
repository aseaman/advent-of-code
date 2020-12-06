const SLOPES = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

export default function partTwo(data: string[]): number {
  const treesPerSlope = [] as number[];

  SLOPES.forEach((slope) => {
    let trees = 0;
    let moveRight = slope.right;
    for (let i = 0; i < data.length - 1; i += slope.down) {
      if (data[i + slope.down][moveRight] === "#") {
        trees++;
      }
      moveRight = (moveRight + slope.right) % data[i + 1].length;
    }
    treesPerSlope.push(trees);
  });

  return treesPerSlope.reduce((acc, curr) => acc * curr, 1);
}
