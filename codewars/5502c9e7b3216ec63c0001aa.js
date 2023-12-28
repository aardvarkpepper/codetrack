/**
 * 2023 Dec 28
 * https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
 * Categorize New Member
 */

function openOrSenior(data){
  const returnArray = [];
  for (const member of data) {
    if (member[0] >= 55 && member[1] > 7) {
      returnArray.push("Senior");
    } else {
      returnArray.push("Open");
    }
  }
  return returnArray;
  // ...
}