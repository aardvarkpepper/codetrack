/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
 * Calculate average
 */

function findAverage(array) {
  if (!array.length) {
    return 0;
  }
  // your code here
  return array.reduce((a,b) => a + b) / array.length
}