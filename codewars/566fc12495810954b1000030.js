/**
 * 2024 Jan 16
 * https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
 * Count the Digit
 */

function nbDig(n, d) {
  let iterator = 0;
  for (let i = 0; i <= n; i++) {
    const stringMe = String(i ** 2).split("");
    for (const character of stringMe) {
      if (Number(character) === d) {
        iterator++;
      }
    }
  }
  return iterator;
    // your code
}