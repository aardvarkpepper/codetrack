/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
 */

const binaryArrayToNumber = arr => {
  console.log(arr);
  let iterator = 0;
  let twoExp = 1;
  for (let i = arr.length-1; i >= 0; i--) {
    iterator += arr[i] * twoExp;
    twoExp *= 2;
    //console.log(arr[i],iterator);
  }
  return iterator;
  // your code
};