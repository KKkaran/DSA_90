const howSum = (target, nums) => {
  if (target < 0) return null;
  if (target === 0) return [];

  for (let x of nums) {
    //console.log(x)
    let newTarget = target - x;
    const result = howSum(newTarget, nums);
    //console.log(newTarget, x, result)
    if (result !== null) {
      return [...result, x];
    }
  }

  return null
};

console.log(howSum(10, [3, 4, 5, 7])); // [3,4] ,[7]
