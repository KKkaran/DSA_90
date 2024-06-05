// arr = [7,1,5,3,6,4]
// return max profit

const getMaxProfit = (prices = []) => {
 
    if (prices.length < 2) {
        return 0;
    }

    let maxProfit = 0;
    let minPrice = prices[0]

    for (let i = 1; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i]-minPrice)
    }
    return maxProfit
};

console.log(getMaxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0,12]));
