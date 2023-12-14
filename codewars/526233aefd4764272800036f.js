/**
 * 2023 Dec 13
 * https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript
 * Matrix Addition
 */

function matrixAddition(a, b){
  const returnArray = [];
  for (let i = 0; i < a.length; i++) {
    const tempArray = [];
    for (let j = 0; j < a[0].length; j++) {
      tempArray.push(a[i][j] + b[i][j])
    }
    returnArray.push(tempArray)
  }
  return returnArray;
  //TODO
}