//find the length of the longest substring without repeating chars

//str = abcabcbb returns 3

const longestSubStringLength = (str)=>{
    
    let i = 0;
    let j = 0;
    let maxLength = 0;
    const mySet = new Set();

    while (j < str.length) {
        if (!mySet.has(str[j])) {
            mySet.add(str[j]);
            j++;
            maxLength = Math.max(maxLength, mySet.size);
        } else {
            mySet.delete(str[i]);
            i++;
        }
    }

    return maxLength;
    
}

const longestSubString = (str)=>{

    let startCounter = 0;
    let moveCounter = 0;
    const setObj = new Set();

    while(moveCounter < str.length){
        if(setObj.has(str[moveCounter])){
            setObj.delete(str[startCounter])
            startCounter++
        }else{
            setObj.add(str[moveCounter])
            moveCounter++;
        }
    }
    return setObj.size
}

console.log(longestSubString('abcdddefghi')) //3