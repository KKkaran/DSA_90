//max sum of sub array of size k

const arr = [2, 5, 1, 8, 2, 9, 1];
//   0  1  2  3  4  5  6
const maxSum = (arr, k) => {
  let i = 0;
  let j = 0;
  let maxSum = -Infinity;
  let sum = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (j - i + 1 === k) {
      //expected window size
      maxSum = Math.max(maxSum, sum);
      sum -= arr[i];
      i++;
    }
    j++;
  }

  return maxSum;
};

console.log(maxSum(arr, 1));
