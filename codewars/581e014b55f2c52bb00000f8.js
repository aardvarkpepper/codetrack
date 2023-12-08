/**
 * 2023 Dec 6
 * https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
 * Decipher this!
 */

function decipherThis(str) {
  const strSplit = str.split(" ");
  const decipheredArray = [];
  //console.log(str);
  for (const word of strSplit) {
    const parsedInt = parseInt(word);
    const parsedIntLength = String(parsedInt).length;
    const remainder = word.slice(parsedIntLength);
    const switchedArray = remainder.split("");
    [switchedArray[0], switchedArray[switchedArray.length-1]] = [switchedArray[switchedArray.length-1], switchedArray[0]];
    const decipheredWord = String.fromCharCode(parsedInt) + switchedArray.join("");
    decipheredArray.push(decipheredWord);
  }
  return decipheredArray.join(" ")
//have fun!
}; 