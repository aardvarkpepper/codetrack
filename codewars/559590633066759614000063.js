/**
 * 2024 Mar 2
 * https://www.codewars.com/kata/559590633066759614000063/train/javascript
 * The highest profit wins!
 */

function minMax(arr){
  let min = Infinity;
  let max = -Infinity;
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return [min, max]; // fix me!
}