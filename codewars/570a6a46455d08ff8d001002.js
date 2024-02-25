/**
 * 2024 Feb 24
 * https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
 * No zeros for heros
 */

function noBoringZeros(n) {
  const reverse = String(n).split("").reverse();
  let n0Index = 0;
  while (reverse[n0Index] === '0' && n0Index < reverse.length) {
    n0Index++;
  }
  const returnMe = Number(reverse.slice(n0Index).reverse().join(""));
  return returnMe;
}