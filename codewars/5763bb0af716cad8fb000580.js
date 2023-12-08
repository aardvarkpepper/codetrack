/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
 * Count the number of cubes with paint on
 */

function countSquares(cuts){
  const totalCubes = (1+cuts)**3;
  const noColor = Math.max(0,(cuts-1)**3);
  return totalCubes - noColor;
}