/**
 * 2024 Jan 14
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
 * Replace With Alphabet Position
 */

function alphabetPosition(text) {
  console.log(text);
  const adjust = "a".charCodeAt();
  const rawArray = [];
  for (const character of text) {
    const toLowerCase = character.toLowerCase();
    const test = /[A-Za-z]/;
    if (character.match(test)) {
        rawArray.push(character.toLowerCase().charCodeAt() - adjust + 1)
    }
  }
  return rawArray.join(" ");
}