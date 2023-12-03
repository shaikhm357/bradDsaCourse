const DoublyLinkedList = require("./index");

const list = new DoublyLinkedList();

list.append(102);
list.append(104);
list.append(106);
list.append(108);

list.prepend("hello");

list.insert(2, "world");

// console.log(list.get(2));

list.remove(3);

console.log(list.contains(106));
console.log(list.contains(1006));

// list.printAll();

// console.log(list);
