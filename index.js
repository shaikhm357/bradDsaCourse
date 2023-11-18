function isAnagram(str1, str2) {
  let freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  let freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
console.log(isAnagram("hello", "helld"));
console.log(isAnagram("hello", "olleh"));
console.log(isAnagram("oww", "wow"));
console.log(isAnagram("app", "ppa"));
