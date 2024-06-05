class DynamicArray:

    def __init__(self, capacity:int):
        self.arr = [0] * capacity # [0,0,0,...capacity]
        self.capacity = capacity
        self.size = 0

    def getCapacity(self) -> int:
        return self.capacity
    
    def getSize(self) -> int:
        return self.size
    
    def get(self, i: int):
        if(i >= self.size):
            return -1
        return self.arr[i]

    def insert(self, i:int, n:int)-> None:
        self.arr[i] = n

    def pushBack(self, n: int)-> None:
        if(self.size == self.capacity):
            return -1
        self.arr[self.size] = n
        self.size+=1

                