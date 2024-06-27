// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

class LinkedListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(4);
const node3 = new LinkedListNode(3);
const node2 = new LinkedListNode(2);
const node1 = new LinkedListNode(1); //head

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const printLL = (root) => {
  if (root == null) return;
  while (root) {
    console.log(root.val);
    root = root.next;
  }
};

const reverseLL2 = (head, l, r) => {
    if (head === null || l === r) return head;
    const dummy = new LinkedListNode(0, head);
    
    let leftPrev = dummy;
    let current = head
    for (let i = 0; i < l - 1; i++) {
        leftPrev = current;
        current = current.next
    }

    //lets reverse the nodes from here
    prev = null;
    for (let i = 0; i < r - l + 1; i++){
        temp = current.next
        current.next = prev
        prev = current
        current = temp
    }

    //arrange pointer
    leftPrev.next.next = current
    leftPrev.next = prev;
    return dummy.next
};

printLL(reverseLL2(node1, 1, 2));

const reverseLL = (head) => {
  if (head === null) return null;

  let current = head;
  let prev = null;

  while (current != null) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
//printLL(reverseLL(node1));
