/**
 * 2024 Jan 16
 * https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
 * Build a pile of Cubes
 */

function findNb(m) {
  let sum = 0;
  let iterator = 1;
  while (sum < m) {
    sum += iterator ** 3;
    iterator++;
  }
  if (sum > m) {
    return -1
  } else {
    return iterator-1;
  }
    // your code
}