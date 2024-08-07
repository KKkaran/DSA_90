from typing import Optional

class ListNode:
    def __init__(self, val=0, next = None) -> None:
        self.val = val
        self.next = next

node1 = ListNode(11)
node2 = ListNode(12)
node3 = ListNode(13)
node4 = ListNode(14)
node5 = ListNode(15)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


def reverseLL(head: Optional[ListNode])-> ListNode:
    if not head:
        return head
    prev = None
    current = head

    while current:
        temp = current.next
        current.next = prev
        prev = current
        current = temp

    return prev



def printNodes(head: Optional[ListNode])->None:
    if not head:
        return
    while head:
        print(str(head.val) + " --> ", end="")
        head = head.next



printNodes(node1)
print()
printNodes(reverseLL(node1))
