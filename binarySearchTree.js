//given a binary tree,
//write a function to test if the tree is a binary search tree

/*
           5
        /    \
       2      7
      / \    / \
     1   3  6   8

*/
class Node {
  constructor(value, leftNode, rightNode) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

let node1 = new Node(1, null, null);
let node3 = new Node(3, null, null);
let node2 = new Node(13, node1, node3);
let node6 = new Node(6, null, null);
let node8 = new Node(8, null, null);
let node7 = new Node(7, node6, node8);
let node5 = new Node(5, node2, node7);

const isBST = (rootNode, min = null, max = null) => {
  if (rootNode === null) return true;

  if (
    (min !== null && rootNode.value < min) ||
    (max !== null && rootNode.value > max)
  ) {
    return false;
  }
  return (
    isBST(rootNode.leftNode, min, rootNode.value) &&
    isBST(rootNode.rightNode, rootNode.value, max)
  );
};

console.log(isBST(node5));
