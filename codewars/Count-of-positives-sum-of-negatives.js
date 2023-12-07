/**
 * 2023 Dec 7
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/rust
 */

function countPositivesSumNegatives(input) {
  console.log(input);
  if (input === null || input.length === 0) {
    return [];
  }
  let pos = 0;
  let neg = 0;
  for (each of input) {
    if (each > 0) {
      pos ++;
    } else if (each < 0) {
      neg += each;
    }
  }
  return [pos, neg];
  // your code here
}