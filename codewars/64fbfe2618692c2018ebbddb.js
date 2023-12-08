/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
 * Flick Switch
 */

function flickSwitch(arr){
  let flip = true;
  const returnArray = [];
  for (const each of arr) {
    if (each === 'flick') {
      flip = !flip;
    }
      returnArray.push(flip)
  }
    return returnArray;
}