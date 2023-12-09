/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
 * Remove First and Last Character
 */

function removeChar(str){
  return str.split("").slice(1, str.length-1).join("");
};
