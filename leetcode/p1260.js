/**
 * 2023 Dec 20
 * https://leetcode.com/problems/shift-2d-grid/
 * Shift 2D Grid
 */

var shiftGrid = function(grid, k) {
  console.log("grid", grid, "k", k)
  let rows = grid.length;
  let columns = grid[0].length;
  let matrixLength = rows * columns;
  const matrixShifted = Array.from(Array(rows), () => Array(columns));
  const convertIndexToMatrix = (index2d) => {
      return [Math.floor(index2d / rows), index2d % columns]
  }
  // let's see if it lets us get away with non-simultaneous assignment
  for (i = 0; i < matrixLength; i++) {
      let shiftedIndex = i+k;
      while (shiftedIndex >= matrixLength) {
          shiftedIndex -= matrixLength;
      }
      console.log("i", i, "shiftI", shiftedIndex);
      const [yIndex, xIndex] = convertIndexToMatrix(i)
      const [yIndexShifted, xIndexShifted] = convertIndexToMatrix(shiftedIndex)
      matrixShifted[yIndexShifted][xIndexShifted] = grid[yIndex][xIndex]
  }
  return matrixShifted;
};