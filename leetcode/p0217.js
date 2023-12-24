/**
 * 2023 Dec 24
 * https://leetcode.com/problems/contains-duplicate/
 * Contains Duplicate
 */

var containsDuplicate = function(nums) {
  // const checkArray = new Set();
  // for (num of nums) {
  //   if (checkArray[num]) {
  //     return true;
  //   } else {
  //     checkArray[num] = 1;
  //   }
  // }
  // return false;

  // Pseudocode for "Contains Duplicate"
// init object
// for each num in nums…
	// if num is a key in object…
		// return true (it appears at least twice)
	// else add num as key, value = true

// Return false if we get this far
  const newObj = {};
  for (let num of nums) {
    if (newObj[num]) {
      return true;
    } else {
      newObj[num] = true;
    }
  }
  return false;
};