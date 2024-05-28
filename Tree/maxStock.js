// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

const prices = [7, 1, 5, 3, 6, 4];

let lPointer = 0;
let rPointer = 1;
let max = -Infinity;
while (rPointer < prices.length) {
  if (prices[lPointer] > prices[rPointer]) {
    lPointer++;
    rPointer++;
    continue;
  }
  max = Math.max(max, prices[rPointer] - prices[lPointer]);
  rPointer++;
  console.log(max);
}

if (max < 0) {
  console.log("No profit made!!");
  return;
}

console.log("max Profit: ", max);
