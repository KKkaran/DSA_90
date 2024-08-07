# Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

def findSqrt(number: int) ->int:
    if number < 2:
        return number
    
    low = 2
    high = number // 2 # floor value of number/2
    while(low <= high):
        mid = (high + low) // 2
        if mid * mid > number:
            high = mid - 1
        elif mid * mid < number:
            low = mid + 1
        else:
            return mid

    return high


print(findSqrt(2))