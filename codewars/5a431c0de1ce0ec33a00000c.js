/**
 * 2023 Dec 18
 * https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
 * Even numbers in an array
 */

function evenNumbers(array, number) {
  const arrToRev = []
  iterator = array.length-1;
  while (number > 0) {
    if(array[iterator] % 2 === 0) {
      number--;
      arrToRev.push(array[iterator])
    }
    iterator--;
  }
  return arrToRev.reverse();
  // good luck
}