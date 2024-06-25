//find the sum of digits of a positive number using recursion?

const addDigits = (num) => {
  if (num < 10) return num;
  return (num % 10) + addDigits(Math.floor(num / 10));
};

console.log(addDigits(1234)); //10
console.log(addDigits(2415)); //12
