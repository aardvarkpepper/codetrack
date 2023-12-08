/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
 * Add Length
 */

function addLength(str) {
  const strSplit = (str.split(" "))
  const retArr = [];
  for (const each of strSplit) {
    retArr.push(`${each} ${each.length}`)
  }
//start-here
  return retArr
}
