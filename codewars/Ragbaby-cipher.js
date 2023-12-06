/**
 * 2024 Dec 6 
 * https://www.codewars.com/kata/5a2166f355519e161a000019/train/javascript
 */

const keyToArray = (key) => {
  const adjust = "a".charCodeAt(0);
  const arrayKey = [];
  for (let i = 0; i < key.length; i++) {
    arrayKey.push(key[i]);
  }
  return arrayKey;
  // not terribly efficient but eh.  Object/map better.
}

function encode(text, key) {
  const encodedArray = [];
  const arrayKey = keyToArray(key);
  console.log(arrayKey);
  const textSplit = text.split(" ");
  for (const word of textSplit) {
    const encodedWordArray = [];
    const wordSplit = word.split("");
    let currentIndex = 1;
    for (const character of wordSplit) {
      const isUpper = character.toUpperCase() === character;
      const index = arrayKey.indexOf(character);
      const indexCiphered = (index + currentIndex) % 25;
      if (isUpper) {
        encodedWordArray.push((arrayKey[indexCiphered]).toUpperCase());
      } else {
        encodedWordArray.push(arrayKey[indexCiphered]);
      }
      currentIndex++;
    } // for character
    encodedArray.push(encodedWordArray.join(""));
  } // for word
  return encodedArray.join(" ");
}

function decode(text, key) {
  const decodedArray = [];
  const arrayKey = keyToArray(key);
  const textSplit = text.split(" ");
  for (const word of textSplit) {
    const decodedWordArray = [];
    const wordSplit = word.split("");
    let currentIndex = 1;
    for (const character of wordSplit) {
      const isUpper = character.toUpperCase() === character;
      const index = arrayKey.indexOf(character);
      const indexCiphered = (index + currentIndex) % 25;
      if (isUpper) {
        decodedWordArray.push((arrayKey[indexCiphered]).toUpperCase());
      } else {
        decodedWordArray.push(arrayKey[indexCiphered]);
      }
      currentIndex++;
    } // for character
    decodedArray.push(decodedWordArray.join(""));
  } // for word
  return decodedArray.join(" ");
}

console.log(encode("This is an example.", "cipher"));