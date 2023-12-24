/**
 * 2023 Dec 24
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 * Minimum Chanages To Make Alternating Binary String
 */

var minOperations = function(s) {
  let zeroCount = 0;
  let oneCount = 0;
  let toggle = true;
  for (const character of s) {
      if (toggle) {
          if (character === "0") {
              oneCount++;
          } else {
              zeroCount++;
          }
      } else {
          if (character === "0") {
              zeroCount++;
          } else {
              oneCount++;
          }
      }
      toggle = !toggle;
  }
  return Math.min (zeroCount, oneCount)
};