/**
 * 2023 Dec 19
 * https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
 * A Needle in the Haystack
 */

function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
  // your code here
}