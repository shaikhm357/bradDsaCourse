function reverseString(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}

console.log(reverseString("hello"));

function reverseStringBack(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
}

reverseStringBack("hello world");
