/**
 * 2024 Jan 30
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
 * 1295. Find Numbers with Even Number of Digits
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  const isEvenLengthPlusAccum = (accumulator, input) => {
      const returnValue = ((String(input).length % 2) === 0) ? 1 : 0;
      //console.log(accumulator, input, returnValue);
      return accumulator + returnValue;
  }
  return nums.reduce(isEvenLengthPlusAccum, 0)
};