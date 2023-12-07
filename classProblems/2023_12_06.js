/**
 * 2023 Dec 6
 * https://replit.com/@JamesLee115/flattenMatrix#index.js
 * https://replit.com/@JamesLee115/matrixMax#index.js
 */

/*
 Given a m x n matrix (a 2D array), write a function that "flattens" the 2D array into a 1D array.
 
 The elements should be in order from top to bottom, left to right.

 DO NOT use Array.prototype.flat(), slice(), concat(), spread operator or any similar built-in method.

 Ex. 1:
 input: [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
 ]
 output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


 Ex. 2:
 input: [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
 ]
 output: ["a", "z", "b", "y", "c", "x", "d", "w"]

 Solution: https://replit.com/@mikeboyle/flattenMatrixSolution
*/

const flatten = (matrix) => {
  const flattenedArray = []
  for (const array of matrix) {
    for (const element of array) {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
  // your code here
};

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log(flatten(matrix1));

const matrix2 = [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
];

console.log(flatten(matrix2));

/*
 Given a m x n matrix (a 2D array), find the largest value in the matrix.
 
 DO NOT use Array.prototype.flat(), Math.max() or any similar built-in method.

 Ex. 1:
 input: [
  [5, 6, 7, 8],
  [9, 10, 11, 12]
  [1, 2, 3, 4],
 ]
 output: 12

 Ex. 2:
 input: [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
 ]
 output: "z"
*/

const matrixMax = (matrix) => {
  let max = matrix[0][0];
  for (const array of matrix) {
    for (const element of array) {
      if (element > max) {
        max = element;
      }
    }
  }
  return max;
  // your code here
};

const matrix1z = [
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [1, 2, 3, 4],
];
console.log(matrixMax(matrix1));

const matrix2z = [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
];

console.log(matrixMax(matrix2));

/*
 Given a m x n matrix (a 2D array), write a function that "flattens" the 2D array into a 1D array.
 
 The elements should be in order BY COLUMNS, top to bottom, left to right

 DO NOT use Array.prototype.flat() or any similar built-in method.

 Ex. 1:
 input: [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
 ]
 output: [1, 5, 9, 2, 6, 10, 3, 7, 11, 4, 8, 12]

 Ex. 2:
 input: [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
 ]
 output: ["a", "b", "c", "d", "z", "y", "x", "w"]
*/

const flattenX = (matrix) => {
  const flattenedArrayX = [];
  const rowCount = matrix.length;
  const columnCount = matrix[0].length;
  console.log("row, column", rowCount, columnCount);
  console.log("testout", matrix[0][1]);
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < rowCount; j++) {
      console.log("i,j", i, j)
      flattenedArrayX.push(matrix[j][i]);
    }
  }
  return flattenedArrayX;
  // your code here
};

const matrix1c = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
console.log(flattenX(matrix1c));

const matrix2c = [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
];

console.log(flattenX(matrix2c));