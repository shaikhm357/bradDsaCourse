function countOccurences(string, toFindLetter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (toFindLetter === string[i]) {
      count++;
    }
  }
  console.log(count);
}

// countOccurences("hello", " ");

function findOccurence(str, letter) {
  let countO = 0;
  str.split("").forEach((element) => {
    if (element === letter) {
      countO++;
    }
  });
  console.log(countO);
}
findOccurence("hello world", "l");
