// How to reverse a given string

const reverseString = (str) => {
  const arr = str.split("");
  arr.reverse(); // reverse js method
  str = arr.join("");
  console.log(str);
};

reverseString("jeeyoung's coding skill");

(function (str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log({
    reversed_value: reversed,
  });
})("Hello!");

// Done
