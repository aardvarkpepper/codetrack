/**
 * 2024 Jan 15
 * https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 * Fake Binary
 */

function fakeBin(x){
  const xSplit = x.split("");
  const xJoin = []
  for (const character of x) {
    if (character === "1" || character === "2" || character === "3" || character === "4" || character === "0") {
      xJoin.push("0")
    } else {
      xJoin.push("1")
    }
  }
  return xJoin.join("");
}