/**
 * 2023 Dec 8
 * https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 */

var merge = function (nums1, m, nums2, n, iterator = 0) {
  let index1 = 0;
  let index2 = 0;
  let nums1Copy = [...nums1];
  for (let i = 0; i < m + n; i++) {
    // console.log("array 1", nums1Copy, index1, nums1Copy[index1]);
    // console.log("array 2", nums2, index2, nums2[index2]);
    // iterator++;
    // if (iterator > 20) {
    //   break;
    // }
    if (index1 < m && index2 < n) {
      if (nums1Copy[index1] <= nums2[index2]) {
        nums1[i] = nums1Copy[index1];
        index1++;
        continue;
      } else {
        nums1[i] = nums2[index2];
        index2++;
        continue;
      }
    } // while
    if (index1 === m) {
      nums1[i] = nums2[index2];
      index2++;
      continue;
    }
    if (index2 === n) {
      nums1[i] = nums1Copy[index1];
      index1++;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
/*
1 from first
2 from first
2 from second
3 from first
5 from second
6 from second
*/