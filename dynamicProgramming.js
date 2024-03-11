//this is the dynamic programming
const fibSeq = (num, memo = {}) => {
    //1,1,2,3,5,8,13,....
    if (num in memo) {
        return memo[num]
    }
    if (num === 1 || num === 2) {
        return 1;
    }
    let sum = fibSeq(num - 1, memo) + fibSeq(num - 2, memo)
    memo[num] = sum
    return sum
};

//fib seq: 0,1,1,2,3,5,8,13
console.log(fibSeq(10)); //
