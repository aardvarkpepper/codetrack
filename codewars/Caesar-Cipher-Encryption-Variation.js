/**
 * 2023 Dec 6
 * https://www.codewars.com/kata/55ec55323c89fc5fbd000019/train/javascript
 */

function caesarEncode(phrase, shift) {
  const adjust = "a".charCodeAt(0);
  const phraseSplit = phrase.split(" ");
  const encryptedArray = [];
  for (const word of phraseSplit) {
    const wordSplit = word.split("");
    const encryptedWordArray = [];
    for (const character of wordSplit) {
      const base26 = (character.charCodeAt(0) - adjust + shift) % 26;
      encryptedWordArray.push(String.fromCharCode(base26 + adjust))
    } // for character
    encryptedArray.push(encryptedWordArray.join(""));
    shift++;
  } // for word
  return encryptedArray.join(" ");
}
