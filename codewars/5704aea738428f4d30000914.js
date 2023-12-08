/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
 * Triple Trouble
 */

function tripleTrouble(one, two, three){
  const arrStor = []
  for (let i = 0; i < one.length; i++) {
    arrStor.push(one[i]);
    arrStor.push(two[i]);
    arrStor.push(three[i]);
  }
  return arrStor.join("");
  //Solution
 }