// Write a method to replace all spaces in a string with "%20" / spaces at the end shouldn't matter.

// str = string
// n = size of string - ignoring ending white spaces
const Urlify = ((str, n) => {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    if (str[i] === " ") {
      newStr += "%20";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
})("Mm Jeeyoung Han     ", 15);

console.log(Urlify);
// Mm%20Jeeyoung%20Han

// Done
