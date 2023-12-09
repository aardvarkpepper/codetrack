/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
 * Reverse words
 */

function reverseWords(str) {
  console.log(str);
  let strSplit = str.split(" ");
  let clone = [];
  for (const each of strSplit) {
    clone.push(each.split("").reverse().join(""))
  }
  return clone.join(" ");
  // Go for it
}