/**
 * 2024 Dec 6
 * https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript
 */

function encode(str,  n)
{
  const adjust = "a".charCodeAt(0) - 1;
  const stringSplit = str.split("");
  const encodedArray = [];
  const numberToArray = (number) => {
    const arrayNumber = [];
    const reverseArray = [];
    while (number > 9) {
      const lastDigit = number % 10;
      arrayNumber.push(number % 10);
      number = (number - lastDigit) / 10
    }
    arrayNumber.push(number);
    while (arrayNumber.length) {
      reverseArray.push(arrayNumber.pop());
    }
    return reverseArray;
  } // numberToReversedArray;
  
  const numArray = numberToArray(n);
  let arrayIndex = -1;
  const nextNumber = () => {
    return numArray[(++arrayIndex) % numArray.length]
  }
//   console.log(n);
//   console.log(numArray)
//   console.log(nextNumber());
//   console.log(nextNumber());
//   console.log(nextNumber());
  
  for (const each of str) {
    encodedArray.push(each.charCodeAt(0)-adjust+nextNumber())
  }
  return encodedArray;
}