// move all the zeroes to the right keeping the non-zero nos. in same order
// [1,3,12,0,0]

const getArr = (arr) => {
  let counter = 0;
  for (let x = 0; x < arr.length-1; x++) {
    if (arr[x] === 0 && arr[x + 1] !== 0) {
      temp = arr[x + 1];
      arr[counter] = temp;
      arr[x + 1] = 0;
      counter++;
      }
  }
  return arr;
};

console.log(getArr([0, 1, 0, 3, 12,0,13,15,18]));
