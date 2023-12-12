/**
 * 2023 Dec 11
 * https://leetcode.com/problems/diagonal-traverse-ii/
 * Diagonal Traverse II
 * First submission failed lenghty testcase. 86889 diags
 * Probably the wasteful iterations of diagonals.
 * Could write an exception, but figure it out properly.
 */

/*
var findDiagonalOrder = function (nums) {
  // Determine an iteration count to know when to stop.
  // Alternate implementation requires too many .length checks.
  // diagonals = nums.length;
  // Iterate through nums[0] to nums[length-1]
  // yIndex+1 + yLength-1 = diagonals

  // iterate through 0-diagonals-1
  // yIndex = math.min(diagonals, yMax); xindex = diagonals - yIndex
  // push xIndex, yIndex
  // while yIndex !== 0
  //   xIndex++, yIndex--;
  //   push xIndex, yIndex
  const traversedArray = [];
  let diagonals = nums.length;
  for (let i = 0; i < nums.length; i++) {
      diagonals =
          Math.max(i + nums[i].length, diagonals);
  } // diagonals
  //console.log(diagonals);
  const yMax = nums.length - 1;
  for (let i = 0; i < diagonals; i++) {
      let yIndex = Math.min(i, yMax);
      let xIndex = i - yIndex;
      //console.log(i, yIndex, xIndex)
      if (nums[yIndex].length > xIndex) {

          traversedArray.push(nums[yIndex][xIndex]);
      }
      while (yIndex !== 0) {
          xIndex++; yIndex--;
          //console.log("iterate");
          if (nums[yIndex].length > xIndex) {
              // reference is never 0 so falsy will not trigger
              traversedArray.push(nums[yIndex][xIndex]);
          }
      } // while
  } // for diagonals
  return traversedArray;
};
*/

var findDiagonalOrder = function(nums) {
  let diagonals = 0;
  for (let i = 0; i < nums.length; i++) {
      diagonals = Math.max(diagonals, i + nums[i].length)
  }
  const diagonAlley = new Array(diagonals).fill(0).map(() => []);
  //console.log(diagonAlley);
  const diagonAlleyCorrected = [];
  for (let i = 0; i < nums.length; i++) {
      // y-index
      for (let j = 0; j < nums[i].length; j++) {
          //console.log("push", i, j);
          // x-index
          //console.log("push to", diagonAlley[i+j]);
          //console.log("input", nums[i][j])
          diagonAlley[i+j].push(nums[i][j]);
          //diagonAlley[i+j] = "piggy";
          //console.log("in-iteration", diagonAlley);
      }
  }
  //console.log("diagonAlley", diagonAlley)
  for (const index of diagonAlley) {
      for (let i = index.length-1; i >= 0; i--) {
          diagonAlleyCorrected.push(index[i])
      }
  }
  return diagonAlleyCorrected;
};