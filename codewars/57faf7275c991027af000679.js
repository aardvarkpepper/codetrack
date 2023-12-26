/**
 * 2023 Dec 26
 * https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
 * Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
 */

function remove(s,n){
  console.log(s, n)
  const pruned = [];
  for (const character of s) {
    if (character !== "!") {
      pruned.push(character);
    } else {
      if (n <= 0) {
        pruned.push(character);
      }
      n--;
    }
  }
  return pruned.join("");
  //coding and coding....
}