/**
 * 2024 Mar 4
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13
 * Minimum Number of Steps to Make Two Strings Anagram
 */

var minSteps = function(s, t) {
  const strToObj = (stringInput) => {
      const objStor = {};
      for (const character of stringInput) {
          if (!objStor[character]) {
              objStor[character] = 1
          } else {
              objStor[character]++;
          }
      }
      return objStor;
  }
  const obj1 = strToObj(s);
  const obj2 = strToObj(t);
  const obj1Keys = Object.keys(obj1).sort();
  const obj2Keys = Object.keys(obj2).sort();
  const objKeysDups = [...obj1Keys, ...obj2Keys].sort();
  const objKeys = [];
  let me = null;
  for (const element of objKeysDups) {
      if (element !== me) {
          objKeys.push(element)
          me = element;
      }
  }
  //console.log(objKeys);
  let cumul = 0;
  for (const element of objKeys) {
      const countOne = obj1[element] || 0
      const countTwo = obj2[element] || 0
      cumul += Math.abs(countOne-countTwo)
  }
  return cumul/2
};

/*
Faster run time:

var minSteps = function(s, t) {
    
    const sVals = countChars(s);
    const tVals = countChars(t);
    
    return sVals.reduce((acc, sVal, i) => acc + Math.max(sVal - tVals[i], 0), 0);
};

function countChars(s) {
    const aCode = 'a'.charCodeAt(0);
    const sVals = Array.from(new Array(26), ()=>0);
    for (let i=0; i<s.length; i++) {
        const val = s.charCodeAt(i);
        const idx = val - aCode;
        sVals[idx]++;
    }
    return sVals;
}
*/