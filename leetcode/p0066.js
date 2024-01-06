/**
 * 2024 Jan 5
 * https://leetcode.com/problems/plus-one/submissions/
 * Plus One
 */

var plusOne = function (digits) {
  let complete = false;
  let currentIndex = digits.length - 1;
  while (!complete) {
      if (digits[currentIndex] === 9) {
          if (currentIndex === 0) {
              digits[currentIndex] = 0;
              digits.unshift(1);
              complete = true;
          } else {
              digits[currentIndex] = 0;
              currentIndex--;
          }
      } else {
          digits[currentIndex] = digits[currentIndex] + 1;
          complete = true;
      }
  }
  return digits;
};