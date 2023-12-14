/**
 * 2023 Dec 13
 * https://leetcode.com/problems/transpose-matrix/
 * Transpose Matrix
 */

var transpose = function(matrix) {
  const transposedMatrix = Array.from(Array(matrix[0].length), () => Array(matrix.length));
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          transposedMatrix[j][i] = matrix[i][j]
      }
  }
  return transposedMatrix;
};