/**
 * 2023 Dec 14
 * https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
 * Rotate Array
 */

var rotate = function(nums, k) {
  const returnArray = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
      let needPos = i-k;
      while (needPos < 0) {
          needPos += nums.length;
      }
      returnArray[i] = nums[(needPos) % nums.length]
  }
  for (let i = 0; i < nums.length; i++) {
      nums[i] = returnArray[i];
  }
};