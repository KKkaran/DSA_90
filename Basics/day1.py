myList = ["apple", "cherry", "banana"]
print(myList)

myList2 = list()
myList2.append('pop')
print(myList2[0])


for i in myList2:
    print(i)

if "applt" in myList:
    print('good')

print(len(myList))

myList.append('sick')

print(myList)

myList.insert(31, "sick2")

print(myList)


myList.pop() #returns the last item and also remove it

print(myList)

#myList.remove("sick2") #potentially can give error if the item you trying to remove doesn't exist

#myList.clear() # removes all the elements

#myList.sort()

print(sorted(myList))
print(myList)

arr = [44] * 5
print(arr)


# slicing of arr using :
# .     0  1  2  3  4  5  6  7  8  9
arr1 = [11,22,33,44,55,66,77,88,99,100]
#arr2 = arr1[3:6] # 6 index will not be included
arr2 = arr1[::6] #6 is called step index basically every 6th index will be taken; in this case it will be [11, 77]
arr3 = arr1[6:2:-1] # reverse the arr, when using -1 make sure starting and ending index get reversed
print(arr2)
print(arr3)

#copying of arr
friends = ['joe', 'rachel', 'minnie', 'ron']
friends2 = friends # creates shallow copy so when friends2 is changed, friends changes too
print(friends)
friends3 = friends.copy() # this is a copy of original array, we can also use 
#or
friends4 = list(friends)
friends5 = friends[:]
#these both of the above create deep copy of array

#advanced concept: list comprehension
a = [1,2,3,4,5,6]
b = [k / 4 for k in a]
print(b)