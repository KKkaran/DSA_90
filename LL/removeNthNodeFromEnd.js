//given the head, remove the nth node from the end of the linked list

class LinkedListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node5 = new LinkedListNode(5);
const node4 = new LinkedListNode(4, node5);
const node3 = new LinkedListNode(3, node4);
const node2 = new LinkedListNode(2, node3);
const node1 = new LinkedListNode(1, node2);

//print LL
const printLL = (head = null) => {
  if (head === null) return head;
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
};

const removeNthNode = (head = null, n) => {
  if (head === null) return head;
  let temp1 = head;
  let counter = 0;
  while (head !== null) {
    counter++;
    head = head.next;
  }
  let temp = temp1;
  if (n <= counter) {
    if (n === counter) {
      return temp1.next;
    }
    for (let i = 1; i <= counter; i++) {
      const where = counter - i + 1; // 5 - 4 + 1 = 2
      if (where === n + 1) {
        const tempNode = temp.next.next || null;
        temp.next = tempNode;
        break;
      }
      temp = temp.next;
    }
  }

  return temp1;
};

//printLL(node1);
printLL(removeNthNode(node1, 5));
