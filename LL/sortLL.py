def sortArr(list1, count1,list2, count2) -> list:
    i,j = 0,0
    list3 = list()
    while(i < count1 and j < count2):
        if list1[i] < list2[j]:
            list3.append(list1[i])
            i+=1
        else: 
            list3.append(list2[j])
            j+=1

    # Append the remaining elements from list1
    while i < count1:
        list3.append(list1[i])
        i += 1
    
    # Append the remaining elements from list2
    while j < count2:
        list3.append(list2[j])
        j += 1

    return list3

print(sortArr([2,8,15,18],4,[5,9,12,17,19,25,30],7))