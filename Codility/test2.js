function solution(A) {
  if (A.length <= 1) return A.length;
  let ans = [0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] >= A[i - 1]) ans.push(i);
    for (let j = i; j > 0 && A[j] < A[j - 1]; j--) {
      div(A, j, j - 1);
      if (j <= ans[ans.length - 1]) ans.pop();
    }
  }
  return ans.length;
}

function div(A, i, j) {
  let t = A[i];
  A[i] = A[j];
  A[j] = t;
}

console.log(solution([4, 3, 2, 6, 1]));
console.log(solution([2, 1, 6, 4, 3, 7]));
console.log(solution([2, 4, 1, 6, 5, 9, 7]));
