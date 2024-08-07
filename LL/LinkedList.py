from Node import Node


class LL:
    def __init__(self):
        self.head = None
        self.tail = None
        self.count = 0

    def addNodetoLL(self, value):
        newNode = Node(value)
        if(self.count == 0):
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.pointer = newNode
            self.tail = newNode
        self.count += 1

    def printLL(self):
        print("Printing LL below...")
        curr = self.head
        while(curr is not None):
            print(curr.value)
            curr = curr.pointer



ll = LL()
ll.addNodetoLL(222)
ll.addNodetoLL(333)
ll.addNodetoLL(444)

print(ll.count)

ll.printLL()