/**
 * 2024 Feb 5
 * https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
 * Multiplication table
 */

multiplicationTable = function(size) {
  const retArray = [];
  for (let i = 1; i <= size; i++) {
    const subArray = [];
    for (let j = 1; j <= size; j++) {
      subArray.push(i*j)
    }
    retArray.push(subArray)
  }
  return retArray;
  // insert code here
}