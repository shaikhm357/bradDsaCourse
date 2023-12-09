function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > currVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

console.log(insertionSort([5, 4, 2, 1]));
console.log(insertionSort([4, 5, 2, 1]));
console.log(insertionSort([3, 4, 2, 1]));
