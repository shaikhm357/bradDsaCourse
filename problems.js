const { LinkedList } = require("./index");

function reverseStr(str) {
  const list = new LinkedList();
  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }
  let reverseList = "";
  let current = list.head;
  while (current !== null) {
    reverseList += current.data;
    current = current.next;
  }
  return reverseList;
}

console.log(reverseStr("hello world"));
