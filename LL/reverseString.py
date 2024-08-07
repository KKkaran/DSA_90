from typing import List

s = ["h","e", "l","l","o"]
def reverseString(s: List[str]) -> None:
       low,high = 0,len(s)-1
       while(low <= high):
            s[low],s[high] = s[high],s[low]
            low +=1
            high-=1


print(s)
reverseString(s)
print(s)