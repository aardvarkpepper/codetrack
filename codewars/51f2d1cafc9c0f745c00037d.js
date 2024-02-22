/**
 * 2024 Feb 22
 * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
 * String ends with?
 */

function solution(str, ending){
  return str.slice(str.length-ending.length) === ending
  // TODO: complete
}