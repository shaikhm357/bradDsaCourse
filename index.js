const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenSquare = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sumOfEvenSquare);
