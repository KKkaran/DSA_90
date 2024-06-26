# an array of integers [] return indices of integers that sum up to the target
# [2, 7, 11, 15] and target = 9

import array


def getIndices(arr, target):
    if arr is None:
        return 'Invalid Input'
    
    defObj = {}
    if isinstance(arr, list):
        for x in arr:
            if(x < target):
                defObj[]

    else:
        return 'nope'
    

print(getIndices([2,7,11,15],9))