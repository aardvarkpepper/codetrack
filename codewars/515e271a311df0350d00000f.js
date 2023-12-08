/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/515e271a311df0350d00000f/javascript
 * Square(n) Sum
 */

function squareSum(numbers){
  let iterator = 0;
  for (const each of numbers) {
    iterator += each**2
  }
  return iterator;
}