// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// 3 steps: [1,1,1]     [1,2]    [2,1]
var getWays = function (steps, memo) {
    if (memo === void 0) { memo = {}; }
    if (steps in memo) {
        return memo[steps];
    }
    if (steps <= 2) {
        return steps;
    }
    var stepsCount = getWays(steps - 1, memo) + getWays(steps - 2, memo);
    memo[steps] = stepsCount;
    return stepsCount;
};
console.log(getWays(44));
