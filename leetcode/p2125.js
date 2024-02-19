/**
 * 2024 Feb 19
 * https://leetcode.com/problems/number-of-laser-beams-in-a-bank/submissions/1179981171/
 * Number of Laser Beams in a Bank
 */

var numberOfBeams = function (bank) {
  let previousRow = 0;
  let currentRow = 0;
  let lasers = 0;
  for (let i = 0; i < bank.length; i++) {
      console.log("row", i, bank[i])
      const emitters = Number(bank[i].split("").reduce((a,b) => Number(a) + Number(b)))
      console.log(emitters)
      if (emitters !== 0) {
          if (previousRow === 0) {
              previousRow = emitters;
          } else if (currentRow === 0) {
              currentRow = emitters;
              lasers += previousRow * currentRow;
          } else {
              previousRow = currentRow;
              currentRow = emitters;
              lasers += previousRow * currentRow;
          }
      }
  }
  return lasers;
};