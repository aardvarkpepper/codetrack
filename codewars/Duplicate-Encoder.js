/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 */

function duplicateEncode(word){
  // ...
const objStor = {}
const arrayP = [];
for (const character of word) {
  const char = character.toLowerCase();
  if (objStor[char]) {
    objStor[char]++
  } else {
    objStor[char] = 1;
  }
}
for (const character of word) {
  const char = character.toLowerCase();
  if (objStor[char] === 1) {
    arrayP.push("(")
  } else {
    arrayP.push(")")
  }
}
return arrayP.join("");
}
