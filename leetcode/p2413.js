/**
 * 2024 Feb 7
 * https://leetcode.com/problems/smallest-even-multiple/
 * Smallest Even Multiple
 */

var smallestEvenMultiple = function(n) {
  return n % 2 === 0 ? n : 2*n
};