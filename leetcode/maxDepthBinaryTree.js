const tree = [3, 9, 20, null, null, 15, 7];

class TreeNode {
  static count = 0;
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

const seven = new TreeNode(7, null, null);
const fifteen = new TreeNode(15, null, null);
const twenty = new TreeNode(20, fifteen, seven);
const nine = new TreeNode(9, null, null);
const three = new TreeNode(3, nine, twenty);

let max = 1;
let stack = [three];
while (stack.length > 0) {
  const popped = stack.pop(); //three on first iteration
  if (popped.left || popped.right) {
    max += 1;
    if (popped.left) {
      stack.push(popped.left);
    }
    if (popped.right) {
      stack.push(popped.right);
    }
  }
}

console.log("max: ", max);
