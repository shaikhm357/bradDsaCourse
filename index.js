// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  let swapped = false;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = false;
      }
    }
  }
  return arr
}

console.log(bubbleSort([5, 4, 2, 1]));
console.log(bubbleSort([4, 5, 2, 1]));
console.log(bubbleSort([3, 4, 2, 1]));
