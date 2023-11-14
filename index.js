function unique(str) {
  const uniqueChar = {};
  for (let i = 0; i < str.length; i++) {
    if (uniqueChar[str[i]]) {
      return false;
    }
    uniqueChar[str[i]] = true;
  }
  return true;
}

console.log(unique("abcde"));
console.log(unique("abccde"));
console.log(unique("abcdde"));
console.log(unique("abcdef"));
console.log(unique(""));
