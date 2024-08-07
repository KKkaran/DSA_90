class LLNode:
    def __init__(self, val, pointer) -> None:
        self.val = 0 if val is None else val
        self.pointer = pointer


nodes = tuple()
nodes.__add__