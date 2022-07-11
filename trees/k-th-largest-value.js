// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  let count = 0;
  let result = -1;
  DFSpostOrder(tree);
  return result;
  function DFSpostOrder(node) {
    if (!node) {
      return;
    }

    DFSpostOrder(node.right);

    console.log(node.value);
    count++;
    if (count === k) {
      result = node.value;
    }
    DFSpostOrder(node.left);
  }
}

const tree = new BST(15);
tree.left = new BST(5);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(1);
tree.left.left.right = new BST(3);
tree.right = new BST(20);
tree.right.left = new BST(17);
tree.right.right = new BST(22);

console.log(findKthLargestValueInBst(tree, 7));
