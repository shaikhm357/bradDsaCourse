const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((index, num, arr) => {
  // console.log(index);
  // console.log(arr);
  return num * 2;
});

console.log(doubleNumbers);

const evennum = numbers.filter((num) => num > 2);
console.log(evennum);

const accumulate = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(accumulate);

// numbers.forEach((num) => console.log(num));

const foundNum = numbers.find((num) => num > 2);
console.log(foundNum);

const hasEvenNumber = numbers.some((num) => num > 3);
console.log(hasEvenNumber);

const allNumGeaterThanZero = numbers.every((num) => num > 0);
console.log(allNumGeaterThanZero);
