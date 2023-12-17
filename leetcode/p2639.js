/**
 * 2023 Dec 17
 * https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/
 * Find the Width of Columns of a Grid
 */

var findColumnWidth = function(grid) {
  /*
  [[]]
  [0]
  [
      [a, b, c],
      [d, e, f]
  ]
  [0,0,0]
  */
  // console.log(String(-13).length);
  // console.log(String(13).length);
  const intArray = new Array(grid[0].length).fill(0);
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
          if (String(grid[rowIndex][columnIndex]).length > intArray[columnIndex]) {
              intArray[columnIndex] = String(grid[rowIndex][columnIndex]).length;
          }
      }
  }
  return intArray;
};