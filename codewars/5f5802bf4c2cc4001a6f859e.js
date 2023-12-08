/**
 * 2023 Dec 7
 * https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/rust
 * Grid index
 */

function gridIndex(grid, indices) {
  const n = grid.length;
  // outer array
  const calcY = (indexIn) => {
    return Math.floor((indexIn-1) / n)
  }
  // inner subarrays
  const calcX = (indexIn) => {
    return (indexIn-1) % n
  }
  const tempArray = [];
  for (let i = 0; i < indices.length; i++) {
    tempArray.push(grid[calcY(indices[i])][calcX(indices[i])]);
  }
  return tempArray.join("");
}