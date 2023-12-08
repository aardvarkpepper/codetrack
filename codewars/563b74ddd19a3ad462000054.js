/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
 * Stringy Strings
 */

function stringy(size) {
  console.log(size);
  const strArr = [];
  let flip = true;
  for (let i = 0; i < size; i++) {
    if (flip) {
      strArr.push('1');
      flip = !flip;
    } else {
      strArr.push('0');
      flip = !flip;
    }
  }
  const returnVal = strArr.join("");
  //console.log(returnVal);
  return returnVal;
  // your code here   
}