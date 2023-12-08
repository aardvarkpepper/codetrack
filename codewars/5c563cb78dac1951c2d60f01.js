/**
 * 2023 Dec 5
 * https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript
 * Club Doorman
 */

function passTheDoorMan (word){
  //console.log(word);
  const adjust = "a".charCodeAt(0) - 1; // "a" has value 1.
  let index = null;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i-1]) {
      index = i;
      /*
      "lettuce", first "t" is third letter; this detects second "t" which
      has index 3.  Eh.  Could confuse someone trying to maintain code
      but it works.
      */
      console.log("indexdefined", i, word[i], word[index].charCodeAt(0) - adjust);
      break;
    }
  } // for
  return 3 * (word[index].charCodeAt(0) - adjust);
}