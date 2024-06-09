class TreeNode {
  constructor(value, left, right) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let root = new TreeNode("Drinks"); //                                    DRINKS
let hotDrinks = new TreeNode("Hot"); //                              /            \
let coldDrinks = new TreeNode("Cold"); //                          HOT              COLD
let coffee = new TreeNode("Coffee"); //                           /  \           /       \
let tea = new TreeNode("Tea"); //                              Tea  Coffee   Roohafza   Thandai
let roohafza = new TreeNode("Roohafza");
let roohafzaB = new TreeNode("roohafzaB");
let thandai = new TreeNode("Thandai");

root.left = hotDrinks;
root.right = coldDrinks;
hotDrinks.left = tea;
hotDrinks.right = coffee;
coldDrinks.left = roohafza;
roohafza.right = roohafzaB;
coldDrinks.right = thandai;

const pre_order_iteration = (root) => {
  if (root === null) return;
  const stack = [root];

  while (stack.length > 0) {
    const popped = stack.pop();
    console.log(popped.value);
    popped.right && stack.push(popped.right);
    popped.left && stack.push(popped.left);
  }
};

const pre_order_recursion = (root) => {
  if (root == null) return;
  console.log(root.value);
  root.right && pre_order_recursion(root.right);
  root.left && pre_order_recursion(root.left);
};
//pre_order_iteration(root)
//pre_order_recursion(root)

const in_order_traversal = (root, stack = []) => {
  if (root === null) return;
  if (root.right) in_order_traversal(root.right, stack);
  if (root.left) in_order_traversal(root.left, stack);
  stack.unshift(root.value);
  return stack.join(" -->");
};

const post_order_traversal = (root) => {
  //left --> riight --> root
  if (root === null) return;
  root.left && post_order_traversal(root.left);
  root.right && post_order_traversal(root.right);
  console.log(root.value);
};

//console.log(in_order_traversal(root));
//post_order_traversal(root)

const levelOrder_BFS = (root) => {
    if(root === null)return
  const queue = [root];
  while (queue.length > 0) {
    const popped = queue.pop();
    console.log(popped.value);
    popped.left && queue.unshift(popped.left);
    popped.right && queue.unshift(popped.right);
  }
};

levelOrder_BFS(root);
