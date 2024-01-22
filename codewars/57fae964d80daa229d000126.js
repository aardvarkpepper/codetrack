/**
 * 2024 Jan 22
 * https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
 * Exclamation marks series #1: Remove an exclamation mark from the end of string
 */

function remove (string) {
  if (string[string.length-1] === "!") {
    return string.slice(0, string.length-1)
  } else {
    return string;
  }
}