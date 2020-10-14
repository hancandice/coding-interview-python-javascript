/* 
1. Reverse the string 
2. Check with original if they are the same
*/

const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("");
  console.log(str === isPalindrome);
};

Palindrome("jeeyoung");

(function (str) {
  let reversed = "";
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(str === reversed);
})("hannah");

// Done
