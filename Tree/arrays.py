import array
import numpy as np


my_arr = array.array('i',[5,3,1,3])
print(my_arr)

# pi_arr = np.array([], dtype=int)
# print(pi_arr)

#traversal

def traverse(arr):
    for i in arr:
        print(i)


traverse(my_arr)