// Chunked Array
// Write a function "chunk(arr,n)" that returns chunked array of size n at the least.

/* 
1. create an array called "chunked" = []
2. get the last chunked array within last = "chunked"
3. check if last exist OR size last equals to n. if it does exist, then push into "chunked" ELSE push into "last"
4. return "chunked"
*/

// const chunk = ((arr, n) => {
//   const chunked = [];
//   for (let elem of arr) {
//     let last = chunked[chunked.length - 1];
//     if (!last || last.length === n) chunked.push([elem]);
//     else last.push(elem);
//   }

//   return chunked;
// })([1, 4, 12, 3, 2, 6, -9, 0], 9);

const chunk = ((arr, n) => {
  const chunked = [];
  for (let elem of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) chunked.push([elem]);
    else last.push(elem);
  }
  return chunked;
})([1, 4, 12, 3, 2, 6, -9, 0], 3);

console.log(chunk);

// done
