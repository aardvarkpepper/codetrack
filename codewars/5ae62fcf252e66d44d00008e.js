/**
 * 2024 Jan 22
 * https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
 * Expressions Matter
 */

function expressionMatter(a, b, c) {
  const alpha = a+b+c;
  const bravo = a*b*c;
  const charlie = (a+b) * c;
  const delta = a * (b+c);
  return Math.max(alpha, bravo, charlie, delta)
}