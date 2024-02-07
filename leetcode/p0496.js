/**
 * 2024 Feb 7
 * https://leetcode.com/problems/next-greater-element-i/description/
 * 496. Next Greater Element I
 * Yes, I decided to use good naming conventions. Really.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const donut = [];
  for (const stupid of nums1) {
      const stupidIndex = nums2.indexOf(stupid);
      const stupidValue = nums2[stupidIndex];
      //console.log ("huh", stupidIndex, stupidValue)
      let dummerer = -1;
      for (let j = stupidIndex+1; j < nums2.length; j++) {
          if (nums2[j] > stupidValue) {
              //console.log("assign", j)
              dummerer = nums2[j];
              break;
          }
      } // for
      donut.push(dummerer)
  }
  return donut;
};