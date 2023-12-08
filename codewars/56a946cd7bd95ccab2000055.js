/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
 *  Regex count lowercase letters
 */

function lowercaseCount(str){
  let iterator = 0;
  for (const character of str) {
    if (/[a-z]/.test(character)) {
      iterator++;
    }
  }
  return iterator;
    //How many?
}