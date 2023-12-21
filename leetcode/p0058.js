/**
 * 2023 Dec 21
 * https://leetcode.com/problems/length-of-last-word/description/
 * Length of Last Word
 */

var lengthOfLastWord = function(s) {
  const splits = s.trim().split(" ");
  return splits[splits.length-1].length;
};