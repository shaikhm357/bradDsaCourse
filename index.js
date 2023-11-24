function twoSum(arr, target) {
  const numSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (numSet.has(complement)) {
      return [arr.indexOf(complement), i];
    }
    numSet.add(arr[i]);
  }
}

console.log(twoSum([2, 3, 4, 7, 5, 7], 11));
console.log(twoSum([2, 7, 11, 15], 17));
