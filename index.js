function fact(num) {
  if (num === 1) {
    return 1;
  }
  return fact(num - 1) * num;
}

console.log(fact(4));
