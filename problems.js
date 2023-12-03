const DoublyLinkedList = require("./index");

function findPairSum(arr, target) {
  const seen = new DoublyLinkedList();
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (seen.contains(diff)) {
      return [diff, arr[i]];
    }
    seen.append(arr[i]);
  }
  return null;
}

let res = findPairSum([2, 6, 12, 11, 6, 10], 22);
console.log(res);
