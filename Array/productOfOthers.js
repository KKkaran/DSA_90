//[1,2,3,4,5]   ------->     [120,60,40,30,24]


const getArr = (arr=[])=>{
    if(arr.length === 0) return []

    let zeroCount = 0
    let productWiihtoutZero = 1;
    let productTotal = 1;
    const product = arr.forEach((j)=>{
        if(j === 0){
            zeroCount++
        }else{
            productWiihtoutZero *= j
        }
        productTotal*= j 
    })
    return arr.map(i=>{
        if(zeroCount > 1) return 0
        else if(zeroCount === 0) return productTotal/i
        else{
            if(i === 0) return productWiihtoutZero
            else return 0
        }  
    })
}

console.log(getArr([1,2,3,4]))