/*
1. Check if they are the same exact strings 
2. Check the lengths of both strings 
3. Create objects of each one
4. Check if the objects character count are equals
5. Return true
*/

const A = "jeeyoung";

const isObj = (str) => {
  let obj = {};
  for (let i of str) !obj[i] ? (obj[i] = 1) : obj[i]++;
  return obj;
};
console.log(isObj(A));
// { j: 1, e: 2, y: 1, o: 1, u: 1, n: 1, g: 1 }

const isPermutation = (str1, str2) => {
  if (str1 === str2) return true;
  else {
    if (str1.length !== str2.length) return false;
    else {
      // create objects of each one
      const obj1 = isObj(str1);
      const obj2 = isObj(str2);
      // check if the objects character count are equals
      for (let i in obj1) {
        if (obj1[i] !== obj2[i]) return false;
      }
    }
    return true;
  }
};

console.log(isPermutation("jeeyoung", "youjeeng"));

// Done
