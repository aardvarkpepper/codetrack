/**
 * 2023 Dec 18
 * https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 * Array Reduce Transformation
 */

var reduce = function(nums, fn, init) {
  let current = init;
  for (let i = 0; i < nums.length; i++) {
      current = fn(current, nums[i]);
  }
  return current;
};