from math import xrange

def rotateArray(a, b):
        ret = []
        for i in xrange(len(a)):
            ret.append(a[i + b])
        return ret


print(rotateArray([1,2,3,4,5,6],1))