/**
 * 2024 Jan 31
 * https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
 * Anagram Detection
 */

var isAnagram = function(test, original) {
  if (test.length !== original.length) {
    return false;
  }
  const objStor = {};
  let charCount = 0;
  for (const char of test) {
    const character = char.toLowerCase();
    if (objStor[character]) {
      objStor[character]++;
    } else {
      objStor[character] = 1;
      charCount++;
    }
  }
  for (const char of original) {
    const character = char.toLowerCase();
    if (!objStor[character]) {
      return false;
    } else {
      objStor[character]--
      charCount--;
    }
  }
  console.log(objStor)
  return true;
};
