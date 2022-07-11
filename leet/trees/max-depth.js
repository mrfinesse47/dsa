//104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(node) {
  let max = 0;
  dfs(node);
  console.log("end");
  return max;
  function dfs(node, depth = 1) {
    if (!node) {
      //basecase
      //if no node at all will return 0
      return;
    }
    if (max < depth) {
      //not overusing math.max
      max = depth; //using closure
    }

    console.log(node.val, depth);
    dfs(node.left, depth + 1);
    console.log(node.val, depth);
    dfs(node.right, depth + 1);

    console.log("coming back up 1 level");
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));
