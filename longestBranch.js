//write a function to find the longest branch
//of nodes in increasing consecutive order
/* eg:
                0a
             /     \
            1b        1c
           / \        / \
          1d   2e   1f   2g           length = 3
*/

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}
let e = new Node(2, null, null);
let d = new Node(1, null, null);
let b = new Node(1, d, e);

let g = new Node(2, null, null);
let f = new Node(1, null, null);
let c = new Node(1, f, g);

let a = new Node(0, b, c);

const useDFS = (root) => {
  if (root == null) return 0;

  let maxCount = 1;

  const dfs = (node, count) => {
    if (node.left && node.left.value - node.value === 1) {
      dfs(node.left, count + 1);
    } else {
      maxCount = Math.max(count, maxCount);
    }

    if (node.right && node.right.value - node.value === 1) {
      dfs(node.right, count + 1);
    } else {
      maxCount = Math.max(count, maxCount);
    }
  };
  dfs(root, 1);

  return maxCount
};

console.log(useDFS(a));
