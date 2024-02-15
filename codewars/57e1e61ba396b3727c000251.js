/**
 * 2024 Feb 15
 * https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript
 * String cleaning
 */

function stringClean(s){
  const strArr = [];
  const numbers = "1234567890"
  for (const character of s) {
    if (!numbers.includes(character)) {
      strArr.push(character)
    }
  }
  return strArr.join("")
  // Function will return the cleaned string
}