/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
 * Find Maximum and Minimum Values of a List
 */

var min = function (list) {
  let min = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i]
    }
  }
  return min;
}

var max = function (list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i]
    }
  }
  return max;
}