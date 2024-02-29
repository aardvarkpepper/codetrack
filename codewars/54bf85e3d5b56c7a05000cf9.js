/**
 * 2024 Feb 29
 * https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
 * Testing 1-2-3
 */

var number=function(array){
  const retArr = [];
  for (let i = 0; i < array.length; i++) {
    retArr.push(`${i+1}: ${array[i]}`)
    
  }
  return retArr;
  //your awesome code here
}