/**
 * 2023 Dec 20
 * https://leetcode.com/problems/palindrome-number/
 * Palindrome Number
 */

var isPalindrome = function(x) {
  x = String(x)
  let left = 0;
  let right = x.length-1;
  while (left < right) {
      console.log(x[left], x[right])
      if (x[left] !== x[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
};