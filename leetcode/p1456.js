/**
 * 2023 Dec 4
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
 */

var maxVowels = function(s, k) {
  const characterArray = new Array(26).fill(0);
  const adjust = "a".charCodeAt(0);
  // console.log("e".charCodeAt(0) - adjust);
  // console.log("i".charCodeAt(0) - adjust);
  // console.log("o".charCodeAt(0) - adjust);
  // console.log("u".charCodeAt(0) - adjust);
  // a = 0, e = 4, i = 8, o = 14, u = 20;
  let vowelCount = 0;
  let vowelMax;
  for (let i = 0; i < k; i++) {
      characterArray[s[i].charCodeAt(0) - adjust]++;
      // "if" adds a step to every iteration so not used.  If long run time then refactor.
      vowelCount = characterArray[0] + characterArray[4] + characterArray[8] + characterArray[14] + characterArray[20];
  }
  vowelMax = vowelCount;
  for (let j = k; j < s.length; j++) {
      characterArray[s[j].charCodeAt(0) - adjust]++;
      characterArray[s[j-k].charCodeAt(0) - adjust]--;
      // again, left out "if" for direct reference.
      vowelCount = characterArray[0] + characterArray[4] + characterArray[8] + characterArray[14] + characterArray[20];
      if (vowelCount > vowelMax) {
          vowelMax = vowelCount;
      }
  }
  return vowelMax;
};

/*
Class assignment was sliding window.  But that's just a bunch of if statements so is slower.  Eh.
*/