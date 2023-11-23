function arraySum(arr, index = 0) {
  if (arr.length === index) {
    return 0;
  }
  return arraySum(arr, index + 1) + arr[index];
}
console.log(arraySum([1, 2, 3, 4, 5]));
