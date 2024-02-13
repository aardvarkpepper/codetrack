/**
 * 2024 Feb 13
 * https://leetcode.com/problems/add-binary/
 * Add Binary
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const smash = (string) => {
      return string.split("").reverse().map((element) => Number(element));
  }
  const smashA = smash(a);
  const smashB = smash(b);
  const biggerLength = Math.max(smashA.length, smashB.length);
  const concatArray = [];
  let addMe = 0;
  for (let i = 0; i < biggerLength; i++) {
      let smashSum;
      if (smashA[i] === undefined) {
          smashSum = smashB[i] + addMe;
      } else if (smashB[i] === undefined) {
          smashSum = smashA[i] + addMe;
      } else {
          smashSum = smashA[i] + smashB[i] + addMe
      }
      if (smashSum === 3) {
          addMe = 1;
          concatArray.push("1");
      } else if (smashSum === 2) {
          addMe = 1;
          concatArray.push("0");
      } else {
          addMe = 0;
          concatArray.push(String(smashSum))
      }
  } // for
  if (addMe === 1) {
      concatArray.push("1")
  }
  return concatArray.reverse().join("");
};