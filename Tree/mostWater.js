var maxArea = function (height) {
  if (height.length === 0) return 0;

  let maxWater = 0;
  let i = 0; //0
  let j = height.length - 1; //8
  while (i < j) {
    maxWater = Math.max(maxWater, Math.min(height[i], height[j]) * (j - i)); // 8
    if (height[i] <= height[j]) i++;
    else j--;
  }

  return maxWater;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));