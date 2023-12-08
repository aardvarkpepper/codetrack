/**
 * 2023 Dec 5
 * https://www.codewars.com/kata/57e80163f11c64130c000076/train/javascript
 * Arrays in Arrays to Objects within Objects
 */

function arrayToObject(array, iterator = 0){
  console.log("input", array);
  if (iterator > 10) {
    return "Maximum call stack size exceeded"
  }
  if (array.length === 0) {
    // empty array returns empty object
    //console.log("array.length === 0", array);
    iterator++;
    return {};
  }
  if (array[0] && !array[1]) {
    // if only one element in array, prunes / returns arrayToObject(array[0]);
    //console.log("array[0] && !array[1]", array);
    iterator++;
    return arrayToObject(array[0], iterator);
  }
  if (!array[0][1] && !array[1][1]) {
    // if array[0] and array[1] are primitives return {[array[0]] : array[1]};
    //console.log("!array[0][1] && !array[1][1]", array);
    iterator++;
    return {[array[0]] : array[1]};
  }
  if (!array[0][1] && array[1][1]) {
    // if array[0] is primitive and array[1] is not primitive return {[array[0]] : arrayToObject[array[1]]}
    //console.log("!array0.length && array1.length", array);
    iterator++;
    return {[array[0]]: arrayToObject(array[1], iterator)};
  }
  if (!array[1][1].length) {
    //console.log("!array[1][1].length", array);
    iterator++;
    return {[array[0][0]] : array[0][1],  [array[1][0]]: array[1][1]}
  }
  if (array[0][1] && !array[1][1]) {
    //console.log("array[0][1] && !array[1][1], did this just happen?", array)
  }
  if (array[0][1] && array[1][1]) {
    //console.log("array[0][1] && array[1][1]", array);
    iterator++;
    return {[array[0][0]] : array[0][1],  [array[1][0]]: arrayToObject(array[1][1], iterator)};
  }
  /**
   * Just had to track down cases.
   */
}