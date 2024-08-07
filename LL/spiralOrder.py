arr = [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
#print(arr[1][-1])

def spiralCode():
    counter = -1
    for x in arr:
        counter += 1
        for y in x:
            if(counter == 0):
                print(y)
            else




spiralCode()