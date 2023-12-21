/**
 * 2024 Dec 20
 * https://leetcode.com/problems/row-with-maximum-ones/description/
 * Row With Maximum Ones
 */

var rowAndMaximumOnes = function(mat) {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < mat.length; i++) {
      let count = 0;
      for (let j = 0; j < mat[0].length; j++) {
          if (mat[i][j] === 1) {
              count++;
          }
      }
      if (count > max) {
          maxIndex = i;
          max = count;
      }
  }
  return [maxIndex, max];
};