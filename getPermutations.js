// write a function to get all permutations of
// a given list
const list = [1, 3, 5];

const getPerms = (listt) => {
  //console.log(listt)
  if (listt.length === 1) return [listt];
  const perms = [];
  for (let i = 0; i < listt.length; i++) {
    const leadingNum = listt[i];
    const remainingArr = [...listt.slice(0, i), ...listt.slice(i + 1)];

    const remainingNumPerms = getPerms(remainingArr);
    for (let x of remainingNumPerms) {
      perms.push([leadingNum, ...x]);
    }
  }

  return perms;
};

console.log(getPerms(list));
