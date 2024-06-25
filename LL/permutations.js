//Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

const arr = [1];

const getPermutations = (arr) => {
  if (arr.length === 0) return [[]];
  const finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    const permutations = getPermutations([
      ...arr.slice(0, i),
      ...arr.slice(i + 1),
    ]);
    //console.log(permutations)
      for (let l of permutations) {
        console.log(l)
      finalArr.push([arr[i], ...l]);
    }
  }

  return finalArr;
};
console.log(getPermutations(arr));
