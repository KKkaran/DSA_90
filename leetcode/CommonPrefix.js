// //Write a function to find the longest common prefix string amongst an array of strings.

// // If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const getCommonPrefix = (arrStrings = []) => {
    if (arrStrings.length === 0) {
        return ""
    }
    let prefix = arrStrings[0];

    for (let i = 1; i < arrStrings.length; i++){
        while (arrStrings[i].indexOf(prefix) !== 0) { //flower part of flow
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length === 0) {
                return ''
            }
        }
    }
    return prefix;
};

console.log(getCommonPrefix(["flower", "flow", "floet"]));
