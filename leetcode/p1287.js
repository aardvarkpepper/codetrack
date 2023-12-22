/**
 * 2023 Dec 22
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 * Element Appearing More Than 25% In Sorted Array
 */

var findSpecialInteger = function(arr) {
  /*
  firstIndex = 0;
  secondIndex = 25%;
  if firstIndex === secondIndex, return.
  otherwise, we know firstIndex is not solution.  but we don't know about secondIndex.

  Suppose thirdIndex set to secondIndex + 25% and no match.  secondIndex could still
  be solution as firstIndex and thirdIndex span 50%; ">25%" could still be between them.

  So set thirdIndex midway between firstIndex and secondIndex, and fourthIndex 25%+.
  If thirdIndex === fourthIndex, return.
  (btw that would mean secondIndex must match thirdIndex and fourthIndex.)

  If thirdIndex !== secondIndex && fourthIndex !== secondIndex, then we have tested
  at indices 0, 12.5, 25, 37.5.  25 cannot be solution, as either 12.5 or 37.5 would
  have to match.  The array is sorted, so we know all values between 0 and 12.5
  do not match 25's value.  If 12.51 were a match and 37.51 a match, then 25 would
  match 37.5.

  That is, all values from 25 index and less need no longer be tested.



  Set fifthIndex midway between 25 and 37.5 (at 31.25), sixthIndex at 25%+.



  If thirdIndex === secondIndex && fourthIndex !== secondIndex, then we're still

  Really, we're using binary search on sorted array to find the first index
  with value equal to secondIndex value.

  Eventually we find it, then match to that index + 25%.  If not a match, then what
  we know secondIndex value is not a solution.  We also know the last index with
  a value that matched secondIndex is not a solution, nor is any intermediate index.


  leftIndex = 0;
  rightIndex = leftIndex + Math.floor(length*0.25) (accounting for leftIndex)
  
  */

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + Math.floor(arr.length*0.25)]) {
          return arr[i];
      }
  }
  return null;
};