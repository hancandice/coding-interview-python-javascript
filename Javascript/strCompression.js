// Implement a method to perform a basic string compression using the counts of repeated characters.

const stringCompression = (str) => {
  const n = str.length;
  let count = 1;
  let output = "";
  let uniqCount = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      output += str[i] + count;
      count = 1;
      uniqCount++;
    }
  }
  if (uniqCount === n) return str;
  else return output;
};

const word = "Jeeyoung";

console.log({
  word: stringCompression(word),
});

// Done
