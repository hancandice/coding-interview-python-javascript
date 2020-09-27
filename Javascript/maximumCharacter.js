// find the character that appears the most and total number of times it appears

// 1. generate key - value pair
// 2. create an object, if the character of str does not exist in obj, then sets its value to 1, it it does, do an increment

const maxCharacter = (str) => {
  let obj = {};

  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }

  let maxNum = 0;
  let maximumChar = "";

  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maximumChar = char;
    }
  }
  console.log(obj);
  console.log(`${maximumChar} appears ${maxNum} times`);
};

maxCharacter("jeeyoung");
// { j: 1, e: 2, y: 1, o: 1, u: 1, n: 1, g: 1 }

// e appears 2 times
//   appears 9 times
