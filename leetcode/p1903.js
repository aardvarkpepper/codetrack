/**
 * 2023 Dec 20
 * https://leetcode.com/problems/largest-odd-number-in-string/description/
 * Largest Odd Number in String
 */

var largestOddNumber = function(num) {
  let lastIndex = null;
  for (let i = num.length-1; i >= 0; i--) {
      if (Number(num[i] % 2) === 1) {
          lastIndex = i;
          break;
      }
  }
  if (!lastIndex && lastIndex !== 0) {
      return ""
  } else {
      return num.slice(0, lastIndex+1)
  }
};