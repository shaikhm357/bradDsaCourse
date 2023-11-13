function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((cur, acc) => cur + acc, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5, 6]));
