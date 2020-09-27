// how to reverse an integer
/* 
STEPS:
1. convert to a string
2. turn into an array
3. reverse js method
4. back to string
5. back to int
*/

const reverseInt = (n) => {
  if (n < 0) {
    return -1 * parseInt(n.toString().split("").reverse().join(""));
  } else {
    return parseInt(n.toString().split("").reverse().join(""));
  }
};

console.log({
  testcase1: reverseInt(500),
  testcase2: reverseInt(203948283),
  testcase3: reverseInt(-392348122),
  testcase4: reverseInt(-4002),
});
