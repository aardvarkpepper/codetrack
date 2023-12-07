/**
 * 2023 Dec 5
 * https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
 */

function digitize(n) {
  const nString = String(n);
  const reversedArray = [];
  for (let i = nString.length-1; i >=0; i--) {
    reversedArray.push(Number(nString[i]));
  }
  //code here
  return reversedArray;
}