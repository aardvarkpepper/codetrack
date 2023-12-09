/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
 * Isograms
 */

function isIsogram(str){
  const objStor = {}
  for (const character of str) {
    char = character.toLowerCase();
    if (objStor[char]) {
      return false;
    } else {
      objStor[char] = 1;
    }
  }
  return true;
  //...
}