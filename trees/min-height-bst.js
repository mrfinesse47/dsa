function minHeightBst(array) {
  // Write your code here.

  let tree = null;
  pushToTree(array);

  function pushToTree(arr) {
    const mid = Math.ceil(arr.length / 2) - 1;

    if (tree === null) {
      tree = new BST(arr[mid]);
    } else {
      tree.insert(arr[mid]);
    }

    const left = arr.slice(0, mid);
    const right = arr.slice(mid + 1);
    // console.log(left);
    // console.log(right);
    if (left.length) pushToTree(left);
    if (right.length) pushToTree(right);
  }
  return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]));
