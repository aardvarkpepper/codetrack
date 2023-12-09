/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
 * Find the next perfect square!
 */

function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) {
    return -1
  }
  next = sq+1;
  while (Math.sqrt(next) % 1 !== 0) {
    next++;
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  return next;
}