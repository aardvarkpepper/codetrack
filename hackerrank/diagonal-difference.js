/**
 * 2023 Dec 10
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 * Diagonal Difference
 */

function diagonalDifference(arr) {
  if (!arr) {
      return 0;
  }
  let topLeftSum = 0;
  let topRightSum = 0;
  for (let i = 0; i < arr.length; i++) {
      topLeftSum += arr[i][i];
      topRightSum += arr[i][arr.length-1-i];
  }
  return Math.abs(topLeftSum - topRightSum);
  // Write your code here
}