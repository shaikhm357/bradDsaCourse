function inSequence(arr) {
  const numSet = new Set(arr);
  let longSeq = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currNum = num;
      let currSeq = 1;
      while (numSet.has(currNum + 1)) {
        currNum++;
        currSeq++;
      }
      longSeq = Math.max(longSeq, currSeq);
    }
  }
  return longSeq;
}

console.log(inSequence([100, 4, 200, 1, 2, 3]));
