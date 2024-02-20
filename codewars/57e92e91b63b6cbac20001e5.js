/**
 * 2024 Feb 20
 * https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
 * Holiday VIII - Duty Free
 */

function dutyFree(normPrice, discount, hol){
  const savingsPer = (discount/100) * normPrice
  const bottles = Math.floor(hol / savingsPer)
  return Number(bottles.toFixed(0))
}