/**
 * 2023 Dec 4
 * In-class problem on replit
 * cut and pasted below, along with code.
 * /*
Given an aray of positive numbers and a positive number k, find the maximum sum of any contiguous subarray of size k.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

Solution code: https://replit.com/@mikeboyle/maximum-subarray-size-k-solution#index.js
2023 Dec 3 in-class problem
*/

const maxSubarray = (nums, k) => {
  let sum = 0;
  let maxSum;
  for (i = 0; i < k; i++) {
    sum += nums[i];
  } // for
  maxSum = sum;
  for (j = k; j < nums.length; j++) {
    sum += nums[j] - nums[j-k];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
  /*
  Doesn't handle if k > nums.length.  But I'd rather write code at
  start to handle exceptions rather than checking.  Probably that's
  not a good pattern for later though.
  */
  // your brilliant code goes here
};

console.log(maxSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSubarray([2, 3, 4, 1, 5], 2)); // 7
 