function reverse(input) {
    // add whatever parameters you deem necessary - good luck!
    if (typeof input !== 'string') {
        return null;
    }
    const jj = []
    const code = (index) => {
        if(index === -1) return
        jj.push(...input.split("").splice(index, 1))
        code(--index)
    }   

    code(input.length-1)
    return jj.join('')

}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

//power(2,0) ----> 1
//power(2,2) ----> 4
//power(2,4) ----> 16
const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};
// console.log(power(2, 4));
// console.log(power(2, 0));
// console.log(power(2, 2));

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

//console.log(factorial(100))
const factorial_iteration = (num) => {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
};

//console.log(factorial_iteration(5))
