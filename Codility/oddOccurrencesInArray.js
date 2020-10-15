function solution(A) {
  A = A.toString();
  const obj = {};
  result = null;
  for (let i of A) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  for (let i in obj) {
    if (obj[i] % 2 === 1 || obj[i] === 1) {
      result = i;
    }
  }
  return result;
}

// Done
