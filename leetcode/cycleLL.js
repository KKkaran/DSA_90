class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false; // A list with 0 or 1 node cannot have a cycle
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow pointer by one step
    fast = fast.next.next; // Move fast pointer by two steps

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle detected
}

// Example usage:
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head; // Creating a cycle for testing

console.log(hasCycle(head)); // Output: true

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = null;

console.log(hasCycle(head2)); // Output: false
