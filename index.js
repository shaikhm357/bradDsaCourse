function arrIntersection(arr1, arr2) {
  const intersected = [];
  for (let i = 0; i < arr1.length; i++) {
    if (findMatch(arr2, arr1[i])) {
      if (!intersected.includes(arr1[i])) {
        intersected.push(arr1[i]);
      }
    }
  }
  return intersected;
}

function findMatch(arr2, element) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === element) {
      return true;
    }
  }
}

console.log(arrIntersection([1, 2, 3, 4, 5, 4, 6], [2, 4, 6, 7]));
