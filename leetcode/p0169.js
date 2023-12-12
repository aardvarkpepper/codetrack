/**
 * 2023 Dec 12
 * https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
 * Majority Element
 */

var majorityElement = function(nums) {
  const numMap = new Map()
  for (const num of nums) {
      if (!numMap.has(num)) {
          numMap.set(num, 1)
          if (1 > nums.length/2) {
              return num;
          }
      } else {
          const newCount = numMap.get(num) + 1
          if (newCount > nums.length/2) {
              return num;
          } else {
              numMap.set(num, numMap.get(num)+1)
          }
      }
  } // for
  return "Has no majority element."
};