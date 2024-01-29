/**
 * 2024 Jan 29
 * https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
 * How good are you really?
 */

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,b) => a + b)/classPoints.length < yourPoints
  // Your code here
}