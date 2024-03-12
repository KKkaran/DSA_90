//traversal in the grid of m * n
//we can only go down or right
//in how many ways can you travel from top l to bottom r?

const gridTravel = (m, n, memo = {}) => {
  if (m + "," + n in memo) return memo[m + "," + n];
  if (m === 1 || n === 1) return 1;

  if (m === 2 && n === 2) return 2;

  if ((m === 2 && n === 3) || (m === 3 && n === 2)) return 3;

  let value = gridTravel(m - 1, n, memo) + gridTravel(m, n - 1, memo);

  memo[m + "," + n] = value;
  memo[n + "," + m] = value;

  //console.log(memo);
  return memo[m + "," + n];
};

console.log(gridTravel(4, 4));
