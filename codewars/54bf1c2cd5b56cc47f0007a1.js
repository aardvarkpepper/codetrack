/**
 * 2024 Feb 27
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
 * Counting Duplicates
 */

function duplicateCount(text){
  const objStor = {};
  for (const character of text) {
    const lowerCase = character.toLowerCase();
    if (!objStor[lowerCase]) {
      objStor[lowerCase] = 1
    } else {
      objStor[lowerCase]++
    }
  }
  //console.log(objStor);
  const chars = Object.keys(objStor);
  let retVal = 0;
  for (const character of chars) {
    if (objStor[character] > 1) {
      retVal++;
    }
  }
  console.log(text, objStor, retVal)
  return retVal;
  //...
}