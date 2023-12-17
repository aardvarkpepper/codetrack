/**
 * 2023 Dec 17
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/
 *  Largest 3-Same-Digit Number in String
 */

var largestGoodInteger = function(num) {
  let maxGood = "";
  for (let i = 0; i < num.length-2; i++) {
      if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
          let substring = num[i] + num[i+1] + num[i+2];
          //console.log(substring);
          if (!maxGood) {
              //console.log("setString");
              maxGood = substring;
          } else {
              //console.log("resetString");
              if (Number(substring) > Number(maxGood)) {
                  maxGood = substring;
              }
          }
      } // if
  } // for
  return maxGood;
};