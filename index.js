function titileCase(str) {
  let arrOfWord = str.toLowerCase().split(" ");
  for (let i = 0; i < arrOfWord.length; i++) {
    arrOfWord[i] = arrOfWord[i][0].toUpperCase() + arrOfWord[i].slice(1);
  }
  return arrOfWord.join(" ");
}
console.log(titileCase("the laZY FOX is well"));
