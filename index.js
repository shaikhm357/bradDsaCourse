function formateNumnber(numbers) {
  const areaCode = sliceAndJoin(numbers, 0, 3);
  const prefix = sliceAndJoin(numbers, 3, 6);
  const lineNum = sliceAndJoin(numbers, 6);

  return `(${areaCode}) ${prefix}-${lineNum}`;
}

function sliceAndJoin(numbers, from, to = numbers.length) {
  let res = "";
  while (from < to) {
    res += numbers[from];
    from++;
  }
  return res;
}
// console.log(formateNumnber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function format(nos) {
  let noString = nos.join("");
  let areaCode = noString.substring(0, 3);
  let prefix = noString.substring(3, 6);
  let lineNum = noString.substring(6);
  console.log(`(${areaCode}) ${prefix}-${lineNum}`);
}

format([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
