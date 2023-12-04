/**
 * 2023 Dec 4
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
 * This "/**" tip from Michael Law pretty handy eh
 */

var numOfSubarrays = function(arr, k, threshold) {
  const threshMult = threshold * k;
  // instead of add/subtract/dividing/comparing, skips iterative dividing
  let sum = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
      sum += arr[i];
  }
  if (sum >= threshMult) {
      count++;
  };
  for (let j = k; j < arr.length; j++) {
      sum += arr[j] - arr[j-k];
      if (sum >= threshMult) {
          count++;
      }
  }
  return count;
};