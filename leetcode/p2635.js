/**
 * 2023 Dec 16
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * Apply Transform Over Each Element in Array
 */

var map = function(arr, fn) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i++) {
      returnArray.push(fn(arr[i], i));
  }
  return returnArray;
};