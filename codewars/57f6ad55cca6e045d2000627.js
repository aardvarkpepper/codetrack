/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
 * To square(root) or not to square(root)
 */

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] = array[i]**2
    }
  }
  return array;  
}