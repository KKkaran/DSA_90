//write a function to reverse a linked list
class Node {
  constructor(value, pointer) {
    this.value = value;
    this.pointer = pointer;
  }
}

let node6 = new Node(66, null);
let node5 = new Node(55, node6);
let node4 = new Node(44, node5);
let node3 = new Node(33, node4);
let node2 = new Node(22, node3);
let node1 = new Node(11, node2);

// 1 ---> 2 ---> 3 ---> 4 ---> 5 ---> 6 ---> null
// 6 ---> 5 ---> 4 ---> 3 ---> 2 ---> 1 ---> null

const printLL = (root) => {
  if (root === null) return "Empty LL";
  while (root !== null) {
    console.log(root.value);
    root = root.pointer;
  }
};

const reverseLL = (root) => {
  if (root == null) return;
  let prev = null;
  let curr = root;
  let next = null;

    while (curr !== null) {
        next = curr.pointer; // 2
        curr.pointer = prev; // 1 ---> null
        prev = curr;
        curr = next;

    }
    return prev;
};

printLL(reverseLL(node1));
