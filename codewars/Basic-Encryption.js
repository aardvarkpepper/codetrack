/**
 * 2023 Dec 6
 * https://www.codewars.com/kata/5862fb364f7ab46270000078/train/javascript
 */

function encrypt(text, rule) {
  //   for (const character of text) {
  //     console.log(character.charCodeAt(0));
  //   }
  //console.log(text, rule);
  const encryptArray = [];
  for (const character of text) {
    encryptArray.push(String.fromCharCode((character.charCodeAt(0) + rule) % 256))
  }
  return encryptArray.join("");
};
