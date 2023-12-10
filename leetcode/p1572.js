/**
 * 2023 Dec 10
 * https://leetcode.com/problems/matrix-diagonal-sum/description/
 * Matrix Diagonal Sum
 */

var diagonalSum = function(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
      sum += mat[i][i];
      sum += mat[i][mat.length-1-i];
  }
  if (mat.length % 2 === 1) {
      let midIndex = Math.floor(mat.length/2)
      sum -= mat[midIndex][midIndex];
  }
  return sum;
};