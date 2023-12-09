/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
 * Will you make it?
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump < mpg * fuelLeft;
};