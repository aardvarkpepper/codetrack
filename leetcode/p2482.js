/**
 * 2023 Dec 16
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/submissions/
 * Difference Between Ones and Zeros in Row and Column
 */

var onesMinusZeros = function (grid) {
  const yLength = grid.length;
  const xLength = grid[0].length;
  const diffArray = Array.from(Array(yLength), () => Array(xLength));
  const colSums = Array(grid[0].length).fill(0);
  const rowSums = Array(grid.length).fill(0);
  for (let i = 0; i < yLength; i++) {
      for (let j = 0; j < xLength; j++) {
          if (grid[i][j] === 1) {
              rowSums[i]++;
              colSums[j]++
          }
      } // for j
  } // for i
  //console.log("y", yLength, rowSums, "x", xLength, colSums)
  for (let i = 0; i < yLength; i++) {
      for (let j = 0; j < xLength; j++) {
          rowZeroes = yLength - rowSums[i];
          colZeroes = xLength - colSums[j];
          diffArray[i][j] = rowSums[i] + colSums[j] - rowZeroes - colZeroes
      }
  }
  return diffArray;
};