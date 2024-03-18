const canSum = (target, nums, memo = {}) => {
  // (7, [2,4])
  if (target in memo) {
    return memo[target];
  } else if (target < 0) return false;
  else if (target === 0) return true;

  for (let i of nums) {
    let newTarget = target - i;
    const result = canSum(newTarget, nums, memo);
    memo[target] = result;
    if (result) return true;
  }

  memo[target] = false;
  return false;
};

console.log(`Result: ${canSum(10000, [7,14])}`);
