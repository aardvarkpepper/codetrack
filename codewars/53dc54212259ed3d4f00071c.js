/**
 * 2023 Dec 12
 * https://www.codewars.com/kata/53dc54212259ed3d4f00071c/solutions/javascript
 * Sum Arrays
 */

function sum (numbers) {
  "use strict";
  if (numbers.length === 0) return 0;
let returnValue = 0;
for (const each of numbers) {
  returnValue += each
}
  return returnValue
};

// on rewrite;

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}