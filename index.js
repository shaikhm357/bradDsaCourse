function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  console.log(unique);
}

removeDuplicates([2, 4, 4, 5, 5, 6, 6, 6, 6]);
