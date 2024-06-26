class LinkedListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const printLL = (root) => {
  if (root == null) return;
  while (root) {
    console.log(root.val);
    root = root.next;
  }
};

const node3 = new LinkedListNode(4);
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1); //head

node1.next = node2;
node2.next = node3;

const node6 = new LinkedListNode(4);
const node5 = new LinkedListNode(3);
const node4 = new LinkedListNode(1); //head

node4.next = node5;
node5.next = node6;
 
// printLL(node1);
// printLL(node4);

const code = (l1, l2) => {
  
};


printLL(code(node1, node4))