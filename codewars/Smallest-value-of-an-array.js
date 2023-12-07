/**
 * 2023 Dec 6
 * https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
 */

function min(arr, toReturn) {
  let minIndex = 0;
  let minValue = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minIndex = i;
      minValue = arr[i];
    }
  } // for
  if (toReturn === 'value') {
    return minValue;
  }
  return minIndex;
}