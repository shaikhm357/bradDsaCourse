function wordFrequencyCounter(str) {
  const wordsMap = new Map();
  const words = str.toLowerCase().split(" ");
  for (const word of words) {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
    } else {
      wordsMap.set(word, 1);
    }
  }
  return wordsMap;
}
console.log(
  wordFrequencyCounter("The quick brown fox jumps over the lazy dog.")
);
