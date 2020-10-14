// How to crack the coding interview

const _matrix = [
  [4, 1, 3],
  [2, -4, 0],
  [0, 9, 2],
];

const zeroMatrix = (matrix, n) => {
  // mark the positions
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 0) matrix[r][c] = true;
    }
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === true) {
        // zero the row
        for (let i = 0; i < n; i++) {
          matrix[r][i] = 0;
        }
        // zero the column
        for (let i = 0; i < n; i++) {
          matrix[i][c] = 0;
        }
      }
    }
  }
  return matrix;
};

console.log(zeroMatrix(_matrix, 3));

// Done
