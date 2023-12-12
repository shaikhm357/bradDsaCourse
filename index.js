function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1
}

console.log(binarySearch([2, 4, 5, 8, 9, 11], 5));
console.log(binarySearch([2, 3, 5, 8, 9, 11], 8));
console.log(binarySearch([2, 4, 5, 8, 9, 11], 9));
console.log(binarySearch([2, 4, 5, 6, 7, 11], 4));
console.log(binarySearch([2, 4, 6, 8, 9, 11], 11));
