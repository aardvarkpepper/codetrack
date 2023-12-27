/**
 * 2023 Dec 27
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 * Detect Pangram
 */

function isPangram(string){
  let count = 26;
  const adjust = "a".charCodeAt(0);
  const letters = Array(26).fill(0);
  console.log(letters)
  
    for (const character of string) {
      if (character === "." || character === " ") {
        continue;
      }
      if (!letters[character.toLowerCase().charCodeAt(0)-adjust]) {
        count--;
        letters[character.toLowerCase().charCodeAt(0)-adjust]++;
      }
    }
  console.log(string, count)
  console.log(letters);
  if (count <= 0) {
    return true;
  }
  return false;
  //...
}