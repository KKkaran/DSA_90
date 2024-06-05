const arr = [1, 2, 3, 4, 5] //return false;

const containsDuplicates = (arr=[]) => {
   

    return arr.length !== new Set(arr).size
}

console.log(containsDuplicates([1,2,3,4,5,1]))