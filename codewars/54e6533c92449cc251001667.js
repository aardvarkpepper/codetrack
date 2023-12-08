/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 * Unique In Order
 */

var uniqueInOrder=function(iterable){
  if (iterable.length === 0) {
    return [];
  } 
  let lastValue = iterable[0];
  const returnArray = [iterable[0]];
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== lastValue) {
      returnArray.push(iterable[i]);
      lastValue = iterable[i];
    } 
  }
  return returnArray;
  //your code here - remember iterable can be a string or an array
}