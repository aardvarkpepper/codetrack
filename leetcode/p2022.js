/**
 * 2023 Dec 16
 * https://leetcode.com/problems/convert-1d-array-into-2d-array/
 * Convert 1D Array Into 2D Array
 */

var construct2DArray = function(original, m, n) {
  if (original.length !== m*n) {
      return []
  }
  const convertedArray = Array.from(Array(m), () => Array(n));
  let currentIndex = 0;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          convertedArray[i][j] = original[currentIndex];
          currentIndex++;
      }
  }
  return convertedArray;
};