/**
 * 2024 Jan 17
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
 * Shortest Word
 */

function findShort(s){
  const splitS = s.split(" ");
  let min = Infinity;
  for (const word of splitS) {
    if (word.length < min) {
      min = word.length;
    }
  }
  return min;
}