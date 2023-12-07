/**
 * 2023 Dec 6
 * https://replit.com/@JamesLee115/flattenMatrix#index.js
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
