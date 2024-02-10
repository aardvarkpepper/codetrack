/**
 * 2024 Feb 10
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 * Delete occurrences of an element if it occurs more than n times
 */

function deleteNth(arr,n){
  const objStor = {};
  const arrReturn = [];
  for (const element of arr) {
    if (!objStor[element]) {
      objStor[element] = 1;
    } else {
      objStor[element]++;
    }
    if (objStor[element] <= n) {
      arrReturn.push(element)
    }
  }
  return arrReturn;
  // ...
}