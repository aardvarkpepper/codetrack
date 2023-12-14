/**
 * 2023 Dec 13
 * https://leetcode.com/problems/reshape-the-matrix/description/
 * Reshape the Matrix
 */


var matrixReshape = function(mat, r, c) {
  const xLength = mat[0].length;
  const yLength = mat.length;
  if (xLength * yLength !== r * c) {
      return mat;
  } else {
      const reshapedMatrix = Array.from(Array(r), () => Array.from(c));
      const indexToMatrix = (index, columns) => {
          const x = index % columns;
          const y = Math.floor(index / columns);
          return mat[y][x];
      };
      const matrixToIndex = (x, y) => {
          return (y * xLength) + x
      }
      let startIndex = 0;
      for (let i = 0; i < r; i++) {
          for (let j = 0; j < c; j++) {
              reshapedMatrix[i][j] = indexToMatrix(startIndex, mat[0].length);
              startIndex++;
          }
      }
      return reshapedMatrix;
  }
};