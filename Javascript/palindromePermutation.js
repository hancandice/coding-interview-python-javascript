const getObj = (str) => {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
};

const palindromePermutation = (str) => {
  // remove white spaces between string
  str = str.replace(/ +/g, "");
  console.log(str);
  // get obj
  const obj = getObj(str);
  // check if odd
  console.log(obj);
  console.log(str.length);
  if (str.length % 2 === 1) {
    // return FALSE if more than one odd number character
    let counter = 0;
    for (let i in obj) {
      if (obj[i] % 2 === 1 || obj[i] === 1) {
        counter++;
      }
      if (counter > 1) return false;
    }
  } else {
    // even
    for (let i in obj) {
      if (obj[i] % 2 !== 0) return false;
    }
  }
  return true;
};

console.log(palindromePermutation("TTODDO"));
