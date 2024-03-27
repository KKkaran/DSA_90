const arr = [22, 44, 55, 66, 77, 88, 99];

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  const pivot = Math.floor((start + end) / 2);

  if (target === arr[pivot]) return pivot;

  while (start < end) {
    if (target > arr[pivot]) {
      return binarySearch(arr, target, pivot + 1, end);
    }
    if (target < arr[pivot]) {
      return binarySearch(arr, target, start, pivot);
    }
  }

  return -1
};

console.log(binarySearch(arr, 9999));
