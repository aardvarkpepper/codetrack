/**
 * 2023 Dec 7
 * https://leetcode.com/problems/find-champion-i/description/
 */

var findChampion = function(grid) {
  let max = 0;
  let champion = 0;
  for (let i = 0; i < grid.length; i++) {
      let accumulator = 0;
      for (let j = 0; j < grid.length; j++) {
          accumulator += grid[i][j];
      }
      if (accumulator > max) {
          max = accumulator;
          champion = i;
      }
  }
  return champion;
};