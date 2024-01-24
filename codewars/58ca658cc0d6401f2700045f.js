/**
 * 2024 Jan 24
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f/solutions/javascript
 * Find Multiples of a Number
 */

function findMultiples(integer, limit) {
  const returnArray = [];
  for (let i = integer; i <= limit; i = i + integer) {
    returnArray.push(i)
  }
  return returnArray;
  //your code here
}