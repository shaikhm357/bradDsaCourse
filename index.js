function symmentricDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];
  for (const el of arr1) {
    if (!set2.has(el)) {
      result.push(el);
    }
  }
  for (const el of arr2) {
    if (!set1.has(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(symmentricDiff([1, 2, 3], [2, 3, 4]));
