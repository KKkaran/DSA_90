const howSum = (target, nums, solArr = []) => {
  if (target === 0) return { res: true, data: solArr };
  if (target < 0) return { res: false, data: [] };

  for (let x of nums) {
    const arr = [];
    const newTarget = target - x;
    solArr.push(x);
    const { res, data } = howSum(newTarget, nums, arr);
    if (res) {
      return data;
    }//
  }

  return { res: false, data: [] };
};

console.log(howSum(9, [5, 3, 4, 7]));
