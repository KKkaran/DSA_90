//check if an integer is a palindrome without using string
var isPalindrome = function (num) {
  if (num < 0 || (num !== 0 && num % 10 === 0)) {
    // 10, 150, 100 --> 01 015 001 ||   -25 52-
    return false;
  }
  if (num === 0) return true;
  let half = 0;
  while (num > half) {
    half = half * 10 + (num % 10);
    num = Math.floor(num / 10);
    if (half === num || num == Math.floor(half / 10)) {
      return true;
    }
  }
  return false;
};
