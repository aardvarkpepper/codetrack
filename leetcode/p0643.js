/*
2023 Dec 3
https://leetcode.com/problems/maximum-average-subarray-i/description/
*/

var findMaxAverage = function(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k ; i++) {
      windowSum += nums[i];
  };
  let maxSum = windowSum;
  for (let j = k; j < nums.length; j++) {
      windowSum += nums[j];
      windowSum -= nums[j-k];
      if (windowSum > maxSum) {
          maxSum = windowSum;
      }
  } // for
  return maxSum/k
};