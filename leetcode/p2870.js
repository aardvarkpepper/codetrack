/**
 * 2023 Jan 4
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
 * Minimum Number of Operations to Make Array Empty
 */

var minOperations = function(nums) {
  const mapStore = new Map();
  for (const each of nums) {
      if (mapStore.has(each)) {
          mapStore.set(each, mapStore.get(each) + 1)
      } else {
          mapStore.set(each, 1)
      }
  }
  let operationCount = 0;
  for (const arrayElement of mapStore) {
      const localCount = arrayElement[1];
      if (localCount === 1) {
          return -1;
      }
      if (localCount % 3 === 0) {
          operationCount += localCount / 3;
          //console.log("3 operation", localCount / 3 )
          continue;
      }
      else {
          operationCount += (Math.floor(localCount / 3)) + 1;
          //console.log("2/1 operation", (Math.floor(localCount / 3)) + 1)
          // localCount % 3 === 1
          // operationCount iterates by localCount / 3 - 1 (# times divide by 3)
          // operationCount iterates by 2 (# times divide by 2)
          // OR
          // localCOunt % 3 === 2
          // operationCount iterates by localCount / 3 (# times divide by 3)
          // operationCount iterates by 1 (#times divide by 2)
          // either way, evaluates to localCount / 3 + 1
          continue;
      }
  }
  return operationCount;
};