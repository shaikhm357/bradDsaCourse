function highScoringWord(str) {
  let words = str.split(" ");
  let scores = words.map((word) => {
    return word
      .split("")
      .reduce((sum, letter) => sum + letter.charCodeAt(0) - 96, 0);
  });
  const maxScore = Math.max(...scores);
  const indexOfmaxScore = scores.indexOf(maxScore);
  console.log(words[indexOfmaxScore]);
}

highScoringWord("Hello my name is xavier");
highScoringWord("man i need a taxi up to ubud");
