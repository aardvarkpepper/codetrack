/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
 * Are they the "same"?
 */

function comp(array1, array2){
  if (!array1 || !array2) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  const objStor = {};
  for (const each of array1) {
    const squared = each**2;
    if (objStor[squared]) {
      objStor[squared]++
    } else {
      objStor[squared] = 1;
    }
  } // for
  for (const each of array2) {
    if (!objStor[each]) {
      return false;
    }
    objStor[each]--
  }
  return true;
  //your code here
}