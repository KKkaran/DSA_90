// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

const ransomNote = (str1, str2) => {
    const obj = {}
    let answer = true;
    str2.split('').forEach(element => {
        if (element in obj) {
            obj[element]++
        }else obj[element] = 1
    });

    str1.split('').forEach(element => {
        if (obj[element] === undefined || obj[element] === 0) {
            answer = false
            return
        } else {
            obj[element]-=1
        }
    })
    return answer
}


console.log(ransomNote('aaa', 'aabdd'))