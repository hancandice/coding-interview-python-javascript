// [1, 2, 3, 4, 5, 6, 8, 9, 10];
// [1, 3];

function solution(arr) {
  const expectedSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  const realSum = arr.reduce((a, b) => a + b, 0); // reduce() : cbfunc & initialValue
  return expectedSum - realSum;
}

// Done
