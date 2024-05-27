
def removeDuplicates(arr):
    if(arr is None):
        arr = []
    if(isinstance(arr, list)):
        return len(set(arr))
    else:
        return 0



print(removeDuplicates([4,6,7,7,8,8,8,9]))