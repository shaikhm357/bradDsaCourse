function missingLetter(arr) {
  const n = arr.length + 1;
  let sum = 0;
  for (let i = 97; i < n + 97; i++) {
    sum += i;
  }
  let actual = 0;
  for (let i = 0; i < arr.length; i++) {
    actual += arr[i].charCodeAt();
  }
  console.log(String.fromCharCode(sum - actual));
}

missingLetter(["a", "c"]);
missingLetter(["a", "d", "b"]);
missingLetter(["a", "e", "c", "b"]);
missingLetter(["b", "c"]);
missingLetter(["a", "c"]);
