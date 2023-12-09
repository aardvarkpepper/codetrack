/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript
 * How many are smaller than me?
 */

function smaller(nums) {
  const arrayReturn = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        arrayReturn[i]++;
      }
    }
  }
  return arrayReturn;
//code me
}