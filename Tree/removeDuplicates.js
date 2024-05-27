const getLengthOfUniqueEle = (arr=[]) => {
    if (Array.isArray(arr)) {
        const obj = {}
        for (let x of arr) {
            if (x in obj) {
                obj[x]++
            } else {
                obj[x] = 1
            }
        }
        return Object.keys(obj).length
    }
    return 0;
}

const getLengthOfUniqueEle2 = (arr = []) => {
  if (Array.isArray(arr)) {
    return new Set(arr).size
  }
  return 0;
};


console.log(getLengthOfUniqueEle([4, 5, 6, 6, 7, 7, 7, 8, 9, 9]))
console.log(getLengthOfUniqueEle2([4, 5, 6, 6, 7, 7, 7, 8, 9, 9]));
