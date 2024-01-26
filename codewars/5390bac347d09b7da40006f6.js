/**
 * 2024 Jan 26
 * https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
 * Jaden Casing Strings
 */

String.prototype.toJadenCase = function () {
  const split = this.split(" ");
  const pushMe = [];
  for (let i = 0; i < split.length; i++) {
    const word = split[i];
    const pushWord = [];
    for (let j = 0; j < word.length; j++ ) {
      if (j === 0) {
        pushWord.push(word[j].toUpperCase());
      } else {
        pushWord.push(word[j]);
      }
    }
    const pushSmash = pushWord.join("");
    pushMe.push(pushSmash);
  }
  return pushMe.join(" ");
  //...
};