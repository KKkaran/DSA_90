const arr = [22, 33, 55, 66, 68, 70, 75, 82, 100];

// const existsInArr = (number) => {
//   for (let x of arr) {
//     if (x === number) {
//       return true;
//     }
//   }

//   return false;
// };

const binarySearch = (number, start, end) => {
  if (start > end) {
    return -1;
  }
  const pivot = Math.floor((start + end) / 2);

  if (number === arr[pivot]) {
    return pivot;
  }
  if (number > arr[pivot]) {
    return binarySearch(number, pivot + 1, end);
  }
  if (number < arr[pivot]) {
    return binarySearch(number, start, pivot - 1);
  }
};

console.log(binarySearch(34, 0, arr.length - 1));
