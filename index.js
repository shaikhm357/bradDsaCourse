function anagramGrouping(arr) {
  const anagramGroup = new Map();
  for (const el of arr) {
    const sortedWord = el.split("").sort().join("");
    if (anagramGroup.has(sortedWord)) {
      anagramGroup.get(sortedWord).push(el);
    } else {
      anagramGroup.set(sortedWord, [el]);
    }
  }
  return Array.from(anagramGroup.values());
}
console.log(anagramGrouping(["cat", "act", "dog", "god", "tac"]));
