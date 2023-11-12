// build method
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([2, 3, 66, 4, 7, 8]));

// using loop
function findMaxUsingLoop(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
}

findMaxUsingLoop([2, 3, 66, 4, 77, 88]);
