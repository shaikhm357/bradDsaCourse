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
  (function recur_depth_1st_traversal(root) {
    const result = [];
    function traverse(node) {
      if (node !== null) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(root);
    return result;
  })(root)
);
