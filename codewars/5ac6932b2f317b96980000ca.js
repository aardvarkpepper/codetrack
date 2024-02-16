/**
 * 2024 Feb 16
 * https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
 * Form The Minimum
 */

function minValue(values){
  const hamster = new Set(values);
  const hamsterSort = [...hamster].sort();
  return Number(hamsterSort.join(""));
}