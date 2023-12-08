/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript
 * Find the Integral
 */

function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent+1}`
}