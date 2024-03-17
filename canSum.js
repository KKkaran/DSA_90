const canSum = (target, nums) => {
  // (7, [2,4])
  if (target === 0) return true;

  for (let i of nums) {
    let newTarget = target - i;
    if (newTarget < 0) continue;
    if (canSum(newTarget, nums)) return true;
  }
  return false;
};

console.log(`Result: ${canSum(21, [4, 2, 6, 1])}`);
