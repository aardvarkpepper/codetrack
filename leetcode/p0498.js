/**
 * 2023 Dec 11
 * https://leetcode.com/problems/diagonal-traverse/description/
 * Diagonal Traverse
 */

var findDiagonalOrder = function (mat) {
  const xMax = mat[0].length - 1;
  const yMax = mat.length - 1;
  const diagonAlley = [mat[0][0]];
  let xIndex = 0;
  let yIndex = 0;
  let iteratorSum = 0;
  let upRight = true;
  while (!(xIndex === xMax && yIndex === yMax)) {
      //diagonAlley.push(mat[yIndex][xIndex]);
      if (upRight) {
          if ((yIndex === 0 || xIndex === xMax) && (true)) {
              upRight = false;
              if (xIndex === xMax) {
                  yIndex++;
              } // x can't increase, y increases
              if (yIndex === 0) {
                  xIndex++;
              } // if yIndex increased above, won't also increase xIndex
              console.log("upRight", xIndex, yIndex, mat[yIndex][xIndex], upRight);
              diagonAlley.push(mat[yIndex][xIndex]);
              continue;
          } // switch to !upRight
          xIndex++;
          yIndex--;
          console.log("upRight2", xIndex, yIndex, mat[yIndex][xIndex], upRight);
          diagonAlley.push(mat[yIndex][xIndex]);
          continue;
      } else {
          // !upRight start
          if (yIndex === yMax || xIndex === 0) {
              upRight = true;
              if (yIndex === yMax) {
                  xIndex++;
              }
              if (xIndex === 0) {
                  yIndex++;
              } // if yIndex increased above, won't also increase xIndex
              console.log("NOTupRight", xIndex, yIndex, mat[yIndex][xIndex], upRight);
              diagonAlley.push(mat[yIndex][xIndex]);
              continue;
          }
          xIndex--;
          yIndex++;
          console.log("NOTupRight2", xIndex, yIndex, mat[yIndex][xIndex], upRight);
          diagonAlley.push(mat[yIndex][xIndex]);
      } // !upRight
  } // while
  return diagonAlley;
};