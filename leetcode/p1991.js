/**
 * 2024 Jan 30
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 * 1991. Find the Middle Index in Array
 */

var findMiddleIndex = function(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((a,b) => a + b) - nums[0];
  if (leftSum === rightSum) {
      return 0;
  }
  for (let i = 1; i < nums.length; i++) {
      leftSum += nums[i-1];
      rightSum -= nums[i];
      if (leftSum === rightSum) {
          return i;
      }
  }
  return -1;
};