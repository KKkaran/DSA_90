# A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

# Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

def niceString(input:str)->str:
    occurance = set(input)
    karan = ""
    for x in occurance:
        if x == x.upper():
            if x.lower() in occurance:
                karan += x
        else:
            if x.upper() in occurance:
                karan += x
    gg = ""
    for x in input:
        if x in karan:
            gg += x
    return gg

print(niceString("karanKA"))