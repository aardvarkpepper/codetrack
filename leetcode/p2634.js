/**
 * 2023 Dec 17
 * https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * Filter Elements from Array
 */

var filter = function(arr, fn) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
          filteredArray.push(arr[i])
      }
  }
  return filteredArray;
};