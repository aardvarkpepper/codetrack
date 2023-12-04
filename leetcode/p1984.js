/**
 * 2023 Dec 4
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
 */

var minimumDifference = function(nums, k) {
  /**
  Combination count pretty ridiculous so sort / sliding window
  */
  const numSort = nums.sort((a,b) => a - b);
  //console.log(numSort);
  let localDifference = numSort[k-1] - numSort[0];
  let minDifference = localDifference;
  //console.log("init minDifference", minDifference);
  for (let i = k; i < numSort.length; i++) {
      //console.log("new calc", numSort[i], numSort[i-k+1]);
      localDifference = numSort[i] - numSort[i-k+1];
      if (localDifference < minDifference) {
          minDifference = localDifference;
          //console.log("new minimum", minDifference);
      }
  }
  return minDifference;
};

/**
 * It isn't REALLY sliding window.  Could do sliding window with
 * lots more add/subs, but simpler to just array reference and subtract
 * once.  Easier to read and maintain too.
 */