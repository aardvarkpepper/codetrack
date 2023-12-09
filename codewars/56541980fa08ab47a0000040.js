/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
 * Printer Errors
 */

function printerError(s) {
  let denominator = 0;
  let numerator = 0;
  let eligible = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]);
  for (const each of s) {
    if (!eligible.has(each)) {
      numerator++;
    }
    denominator++;
  }
  return `${numerator}/${denominator}`
    // your code
}