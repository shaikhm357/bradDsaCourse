const Queue = require("./index");

const queue = new Queue();

queue.enqueue("a");
queue.enqueue("c");
queue.enqueue("e");
queue.enqueue("g");

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.peek());

console.log(queue);
console.log(queue.isEmpty());
