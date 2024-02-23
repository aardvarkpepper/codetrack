/**
 * 2024 Feb 23
 * https://leetcode.com/problems/height-checker/description/
 * 1051. Height Checker
 */

var heightChecker = function(heights) {
  const hamster = [...heights].sort((a,b) => a-b);
  let iterator = 0
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== hamster[i]) {
          iterator++;
      }
  }
  return iterator;
};