const { LinkedList } = require("./index");

const list = new LinkedList();

list.add(102);
list.add(104);
list.add(106);
list.add(108);

list.insertAt(1, "a");
list.removeFrom(1);

// console.log(list.get(3));
// console.log(list.get(0));

list.printAll();
