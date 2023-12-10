/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 * Array.diff
 */

function arrayDiff(a, b) {
  const returnArray = []
  for (const each of a) {
    if (!b.includes(each)) {
      returnArray.push(each)
    }
  }
  //console.log(a,b,returnArray)
  return returnArray;
}