/**
 * 2023 Dec 10
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/submissions/
 * Check if Matrix Is X-Matrix
 */

var checkXMatrix = function(grid) {
  for (let i = 0; i < grid[0].length; i++) {
      for (let j = 0; j < grid.length; j++) {
          if (i === j || i === grid.length-j-1)  {
              if (grid[i][j] !== 0) {
                  continue;
              } else {
                  return false;
              }
          } else {
              if (grid[i][j] === 0) {
                  continue;
              } else {
                  return false;
              }            
          }
      }
  }
  return true;
};