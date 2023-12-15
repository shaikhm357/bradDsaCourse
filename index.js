const Queue = require("./Queue");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode("a");
let b = new TreeNode("b");
let c = new TreeNode("c");
let d = new TreeNode("d");
let e = new TreeNode("e");
let f = new TreeNode("f");

root.left = b;
root.right = c;

b.left = d;
b.right = e;

c.left = f;

// console.log(root);

console.log(
  (function breadth_1st_traversal(root) {
    if (!root) return [];

    const result = [];
    const queue = new Queue();
    queue.enqueue(root);
    // console.log(root);
    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      // console.log(current);
      result.push(current.value);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
    }

    return result;
  })(root)
);
