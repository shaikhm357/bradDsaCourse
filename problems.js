const Stack = require("./index");

function reverseString(str) {
  const stack = new Stack();
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    reverse += stack.pop();
  }
  return reverse;
}

console.log(reverseString("hello"));
