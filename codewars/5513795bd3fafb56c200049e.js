/**
 * 2023 Dec 18
 * https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
 * Count by X
 */

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x)
  }
  return z;
}