const countStairs = (steps) => {
  if (steps === 1) return 1;
  else if (steps === 2) return 2;

const stepsCount = countStairs(steps - 1) + countStairs(steps - 2);
  return stepsCount;
};

/*


                  _________
          ________| 
    ______|





*/

console.log(countStairs(5));
