/**
 * 2024 Jan 3
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * Convert an Array Into a 2D Array With Conditions
 * 
 * Constraints:
 * 
 * 1 < nums.length <= 200;
 * 1 <= nums[i] <= nums.length;
 * Iterate through array; to save memory we store in array instead of hash.
 * 
 * Used traditional "hamster" variable to test naming conventions.  >.>
 */

var findMatrix = function(nums) {
  //const arrayStore = Array.from(Array(nums.length), (element, indexHamster) => indexHamster + 1)
  const arrayStore = Array(nums.length).fill(0);
  let max = 0;
  for (const num of nums) {
    arrayStore[num-1]++;
    if (arrayStore[num-1] > max) {
      max = arrayStore[num-1];
    }
  }
  /*
  Here I store number counts.  But could store count of numbers.
  e.g. here [2,4,1,3,1] returns [2,1,1,1,0].
  But instead [[5], [2,3,4], [1]] would be other implementation.
  Maybe easier to read, but more operations, I think.
  */
 const arrayReturn = Array.from(Array(max), () => []);
//  console.log(arrayStore, max);
//  console.log(arrayReturn);
 for (let i = 0; i < arrayStore.length; i++) {
  let pushCount = arrayStore[i];
  let currentIndex = 0;
  while (pushCount > 0) {
    arrayReturn[currentIndex].push(i+1);
    currentIndex++;
    pushCount--;
  }
 }
 return arrayReturn;
};

//console.log(findMatrix([2,4,4,3,4]));