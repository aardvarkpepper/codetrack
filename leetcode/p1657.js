/**
 * 2024 Feb 26
 * https://leetcode.com/problems/determine-if-two-strings-are-close/description/
 * 1657. Determine if Two Strings Are Close
 */

var closeStrings = function(word1, word2) {
  const stringToObject = (stringInput) => {
      const objRet = {};
      for (const character of stringInput) {
          if (!objRet[character]) {
              objRet[character] = 1;
          } else {
              objRet[character]++;
          }
      }
      return objRet
  }
  const obj1 = Object.values(stringToObject(word1)).sort();
  const obj2 = Object.values(stringToObject(word2)).sort();
  console.log ("values", obj1, obj2)
  if (!obj1 && !obj2) {
      return false;
  }
  if (obj1.length !== obj2.length) {
      return false;
  }
  for (let i = 0; i < obj1.length; i++) {
      if (obj1[i] !== obj2[i]) {
          return false;
      }
  }
  const keys1 = Object.keys(stringToObject(word1)).sort();
  const keys2 = Object.keys(stringToObject(word2)).sort();
  //console.log("keys", keys1, keys2)
  for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i]) {
          return false;
      }
  }
  return true;
};