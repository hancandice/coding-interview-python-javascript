// Stacks

// functions: push, pop, peek, length

// console.log(letters);
// ['r', 'a', 'c','e', 'c', 'a','r']

const isPalindrome = (str) => {
  const letters = [];

  let rword = "";

  for (i = 0; i < str.length; i++) {
    letters.push(str[i]);
  }

  for (i = 0; i < str.length; i++) {
    rword += letters.pop();
  }

  if (rword === str) {
    console.log(str + " is a palindrome.");
  } else {
    console.log(str + " is not a palindrome.");
  }
};

isPalindrome("racecar");

// done
