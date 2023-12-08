/**
 * 2024 Dec 7
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

var searchMatrix = function (matrix, target, iterator = 0) {
  const getXY = () => {
    let leftY;
    let leftX;
    if (matrix.length === 1) {
      leftY = 0;
      leftX = left;
    } else {
      leftY = Math.floor(left / matrix.length);
    }
    if (matrix[0].length === 1) {
      leftY = left;
      leftX = 0;
    } else {
      leftX = left % matrix[0].length;
    }
    return [leftY, leftX];
  };
  const flattenedLength = matrix[0].length * matrix.length;
  //console.log(matrix, flattenedLength)
  let left = 0;
  let right = flattenedLength - 1;
  while (left < right) {
    console.log("iterator, left, right", iterator, left, right);
    iterator++;
    const mid = Math.floor((right - left) / 2); // right - left, used left + right
    midX = mid % matrix[0].length;
    midY = Math.floor(mid / matrix.length);
    console.log("mid, midY, midX", mid, midY, midX);
    console.log("matrix[midY][midX]", matrix[midY][midX]);
    if (matrix[midY][midX] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    // if (iterator > 5) {
    //   break;
    // }
  }
  console.log("final left, final right", left, right);
  let leftX;
  let leftY;
  // if (left === 1 && matrix.length === 1) {
  //   leftY = 0;
  // } else {
  //   leftY = Math.floor(left / matrix.length);
  // }
  if (matrix.length === 1) {
    leftY = 0;
    leftX = left;
  } else {
    leftY = Math.floor(left / matrix.length);
  }
  if (matrix[0].length === 1) {
    leftY = left;
    leftX = 0;
  } else {
    leftX = left % matrix[0].length;
  }
  // if (left === 1 && matrix[0].length === 1) {
  //   leftX = 0;
  // } else {
  //   leftX = left % matrix[0].length;
  // }
  //console.log("leftY, leftX", leftY, leftX);
  return matrix[leftY][leftX] === target;
};

//console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
//console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false
//console.log(searchMatrix([[1,1]], 2)) // false
//console.log(searchMatrix([[1],[3]], 3)) // true
console.log(searchMatrix([[1, 3, 5]], 0)); // false

// console.log("Next");
// const binSearch = (array, target) => {
//   let left = 0;
//   let right = array.length-1;
//   while (left < right) {
//     const mid = Math.floor(left+right/2);
//     if (array[mid] < target) {
//       left = mid +1;
//     } else {
//       right = mid-1;
//     }
//   }
//   console.log("left, right", left, right);
//   return array[left];
// }

// console.log(binSearch([1,3,5,7,10,11,16,20,23,30,34,60], 3));