function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++;
    }
  }
  return count;
}

function isVowel(char) {
  const vowels = ["a", "i", "o", "e", "u"];
  let isVowel = false;
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      isVowel = true;
      break;
    }
  }
  return isVowel;
}

console.log(countVowels("aieou"));
// isVowel("o");
