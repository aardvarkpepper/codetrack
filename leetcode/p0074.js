/**
 * 2024 Dec 7
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

var searchMatrix = function(matrix, target) {
  const flattenedLength = matrix[0].length * matrix.length;
  //console.log(matrix, flattenedLength)
  let left = 0;
  let right = flattenedLength-1;
  while (left < right) {
      const mid = Math.floor((right - left) / 2); // right - left, used left + right
      midX = mid % matrix[0].length;
      midY = Math.floor(mid / matrix.length);
      console.log("left", left, "right", right);
      console.log("mid", mid, "midY, midX", midY, midX, matrix[midY][midX]);
      if (matrix[midY][midX] <= target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  const leftX = (left % matrix[0].length) - 1;
  const leftY = Math.ceil(left / matrix.length) - 1;
  const rightX = (right % matrix[0].length) - 1;
  const rightY = Math.ceil(right / matrix.length) - 1;
  console.log("leftFinal", left, matrix[leftY][leftX], "rightFinal", right, matrix[rightY][rightX]);
  return matrix[leftY][leftX] === target;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
//console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false