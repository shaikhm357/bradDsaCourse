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

console.log((function depth_1st_traversal(root) {
  if (!root) return [];

  const result = [];
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let current = stack.pop();

    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
})(root))
