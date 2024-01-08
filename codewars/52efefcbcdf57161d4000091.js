/**
 * 2024 Jan 8
 * https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 * Count characters in your string
 */

function count(string) {
  const objStor = {}
  for (const character of string) {
    if (objStor[character]) {
      objStor[character]++
    } else {
      objStor[character] = 1
    }
  }
  // TODO
  return objStor;
}