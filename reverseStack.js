//reverse the stack without using extra space

const stack = [11, 22, 33, 44, 55, 66];

const reverse = (stack) => {
  const doIt = (index) => {
    if (index === -1) return;
    stack.push(...stack.splice(index, 1));
    console.log(stack);
    doIt(index - 1);
  };

  doIt(stack.length - 2);
  return stack;
};

console.log(reverse(stack));
