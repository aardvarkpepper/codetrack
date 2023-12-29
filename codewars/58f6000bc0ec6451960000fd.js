/**
 * 2023 Dec 29
 * https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript
 * Selective Array Reversing
 */

function selReverse(array, length) {
  if (length === 0) {
    return array;
  }
  const retArr = [];
  const cycles = Math.floor(array.length/length);
  const remainder = array.length - (length*cycles);
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < length; j++) {
      retArr.push(array[i*length + length - 1 - j])
      console.log(i,j,retArr);
    }
  }
  for (let k = 0; k < remainder; k++) {
    retArr.push(array[array.length - 1 - k]);
    console.log(k,retArr);
  }
  return retArr;
  // TODO
}