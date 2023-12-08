/**2023 Dec 6
 * https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 * Encrypt this!
 */

function encryptThis(str) {
  const encryptArray = [];
  const strSplit = str.split(" ");
  for (const word of strSplit) {
    const encryptWordArray = [];
    let leadCharacters = String(word[0].charCodeAt(0));
    for (let i = 1; i < word.length; i++) {
      encryptWordArray.push(word[i])
    }
    if (true) {
      [encryptWordArray[0], encryptWordArray[encryptWordArray.length-1]] = [encryptWordArray[encryptWordArray.length-1], encryptWordArray[0]]
    }
    encryptArray.push(leadCharacters + encryptWordArray.join(""));
  } // word
  return encryptArray.join(" ");
}; 

console.log(encryptThis("A")) // 65
console.log(encryptThis("A wise old owl lived in an oak")) //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke")) //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"