function findfibo(num) {
  if (num < 2) {
    return num;
  }
  return findfibo(num - 1) + findfibo(num - 2);
}

console.log(findfibo(40));
