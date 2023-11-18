// function hashTagGenerator(str) {
//   if (str.length === 0 || str.length > 140) {
//     return `wrong input`;
//   }
//   let words = str
//     .trim()
//     .split(" ")
//     .map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("");

//   return `#${words}`;
// }

function hashTagGenerator(str) {
  const hashtag = str
    .trim()
    .split(" ")
    .reduce((tag, word) => {
      return tag + word.charAt(0) + word.substring(1);
    }, "#");
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

console.log(hashTagGenerator("the javaScript is awesome"));
console.log(hashTagGenerator("all is   well  "));
console.log(hashTagGenerator(""));
console.log(
  hashTagGenerator(
    "the javaScript is awesome awesome awesome awesome v vawesome awesome awesome awesomeawesomeawesomeawesomeawesomeawesomeawesomeawesomeawesomeawesomeawesomeawesomeawesome awesome awesome awesome awesome awesome awesome awesome vawesomeawesome"
  )
);
