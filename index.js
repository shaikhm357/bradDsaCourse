class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);

root.left = node9;
root.right = node20;

node20.left = node15;
node20.right = node7;

//     3
//   /   \
// 9      20
//       /  \
//      15   7

console.log(
  (function maxDepth(root) {
    if (!root) return [];

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  })(root)
);
