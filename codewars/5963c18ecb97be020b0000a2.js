/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
 * Take the Derivative
 */

function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}