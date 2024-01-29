/**
 * 2024 Jan 29
 * https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
 * Factorial
 */

function factorial(n)
{
  console.log(n)
  if (n === 0) {
    return 1;
  }
  if (n < 0 || n > 12) {
    throw ("RangeError");
  }
  let returnval = 1;
  while (n > 1) {
    returnval *= n;
    n--;
  }
  return returnval;
  // Calculate the factorial here
}