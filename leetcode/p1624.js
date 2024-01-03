/**
 * 2024 Jan 2
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 * Largest Substring Between Two Equal Characters
 */

var maxLengthBetweenEqualCharacters = function(s) {
  const adjust = "a".charCodeAt();
  const arrayStor = Array.from(Array(26), (element) => []);
  for (let i = 0; i < s.length; i++) {
      arrayStor[s[i].charCodeAt()-adjust].push(i);
  }
  let max = -1;
  for (const element of arrayStor) {
      const subStringLength = element[element.length-1] - element[0] - 1
      if (subStringLength > max) {
          max = subStringLength;
      }
  }
  return max;
};