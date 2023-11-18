function validPassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char != char.toLowerCase());

  const hasLowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char != char.toUpperCase());

  const hasDigit = password.split("").some((char) => !isNaN(parseInt(char)));

  return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
}

console.log(validPassword("abcAAdll1l"));
console.log(validPassword("abc1238888888"));
console.log(validPassword("AAAA34343434a"));
console.log(validPassword("abc123ABC"));
