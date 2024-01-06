/**
 * 2024 Jan 6
 * https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
 * Lario and Muigi Pipe Problem
 */

function pipeFix(numbers){
  let min = Infinity;
  let max = -Infinity;
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }
  const arrayOut = [];
  for (let i = min; i <= max; i++) {
    arrayOut.push(i)
  }
  return arrayOut;
}