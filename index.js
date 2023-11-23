function numberRange(from, to) {
  if (from === to) {
    return [to];
  }

  let numbers = numberRange(from, to - 1);
  numbers.push(to);
  return numbers;
}

console.log(numberRange(3, 10));
