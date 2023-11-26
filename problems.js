const Queue = require("./index");

function reverseString(str) {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }
  let reverse = "";
  while (!queue.isEmpty()) {
    reverse += queue.dequeue();
  }
  return reverse;
}

console.log(reverseString("hello"));
