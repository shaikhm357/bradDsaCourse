const Stack = require("./index");

const stack = new Stack();

stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);

stack.pop();
stack.pop();

console.log(stack.peek());

// console.log(stack);
