/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript
 * Simple Fun #261: Whose Move
 */

function whoseMove(lastPlayer, win) {
  if (lastPlayer === "black" && win === true || lastPlayer ==="white" && win === false) {
    return "black";
  }
  return "white";
  //coding and coding..
}