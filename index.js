function flattenArray(arr) {
  let newArr = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      newArr = newArr.concat(flattenArray(el));
    } else {
      newArr.push(el);
    }
  }
  return newArr;
}
console.log(flattenArray([1, [2, 3], [4, 5, [6]]]));
