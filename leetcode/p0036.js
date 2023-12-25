/**
 * 2024 Dec 25
 * https://leetcode.com/problems/valid-sudoku/description/
 * Valid Sudoku
 */

var isValidSudoku = function(board) {
  const isValid = ([...args]) => {
      console.log(args);
      const arrayCheck = new Array(9).fill(0);
      for (const each of args) {
          if (each === ".") {
              continue;
          }
          let adjust = each-1;
          if (arrayCheck[adjust] === 1) {
              return false;
          } else {
              arrayCheck[adjust] = 1
          }
      }
      return true;
  }

  //row
  for (const row of board) {
      if (!isValid(row)) {
          return false;
      }
  }

  //column
  for (let i = 0; i < board[0].length; i++) {
      const storageArray = [];
      for (let j = 0; j < board.length; j++) {
          storageArray.push(board[j][i])
      }
      if (!isValid(storageArray)) {
          return false;
      }
  }

  //sub-boxes
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          const storageArray = [];
          for (let k = 0; k < 3; k++) {
              for (let l = 0; l < 3; l++) {
                  storageArray.push(board[i*3 + k][j*3 + l])
              }
          }
          if (!isValid(storageArray)) {
              return false;
          }
      }
  }
  return true;
};