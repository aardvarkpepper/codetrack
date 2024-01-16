/**
 * 2024 Jan 16
 * https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
 * Powers of 2
 */

function powersOfTwo(n){
  const returnArray = [];
  for (let i = 0; i <= n; i++) {
    returnArray.push(2 ** i)
  }
  return returnArray;
}