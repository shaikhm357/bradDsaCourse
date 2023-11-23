function power(base, expo) {
  if (expo === 0) {
    return 1;
  }
  return power(base, expo - 1) * base;
}
console.log(power(3, 3));
