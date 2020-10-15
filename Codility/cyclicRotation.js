function solution(arr, n) {
  const newArr = [];
  if (!arr.length) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    newArr[(i + n) % arr.length] = arr[i];
  }
  return newArr;
}

// Done
