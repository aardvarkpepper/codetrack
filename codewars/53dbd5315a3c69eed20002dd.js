/**
 * 2024 Jan 20
 * https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
 * List Filtering
 */

function filter_list(l) {
  return l.filter(element => typeof(element) === "number")
  // Return a new array with the strings filtered out
}