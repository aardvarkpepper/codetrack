/**
 * 2023 Dec 4
 * https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/
 */

var rearrangeCharacters = function(s, target) {
  /**
  Once again using array charCodeAt, thanks Hector (Qiliang Zhong)
  */
  const characterArray = new Array(26).fill(0);
  const adjust = "a".charCodeAt(0);
  for (const character of s) {
      characterArray[character.charCodeAt(0) - adjust]++;
  } // for
  let copyCount = 0;
  while (true) {
      let isWholeWordFound = true;
      for (const character of target) {
          const characterReference = character.charCodeAt(0) - adjust;
          characterArray[characterReference]--;
          if (characterArray[characterReference] < 0) {
              isWholeWordFound = false;
              break;
          }
          // if (--characterArray[characterReference] < 0) {
          //     isWholeWordFound = false;
          //     break;
          // };
      } // for
      if (isWholeWordFound) {
          copyCount++;
      } else {
          break;
      }
  } // while
  return copyCount;
};

/*
Faster solution (?)
function rearrangeCharacters(s, target) { // Method 1: Frequency Counter (HashMap's). Time O(n + m) Space O(26)
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.get(s[i]) + 1 || 1);
    }
    for (let i = 0; i < target.length; i++) {
        tMap.set(target[i], tMap.get(target[i]) + 1 || 1);
    }
    let ans = Number.MAX_SAFE_INTEGER;
    for (const [char, count] of tMap) {
        if (sMap.get(char) === undefined) {
            return 0;
        }
        ans = Math.min(ans, Math.floor(sMap.get(char) / count));
    }
    return ans;
};
Mapped twice, returned 0 if undefined, otherwise Math.floor map of one map divided by other map.  Faster (less iteration),
no conditional checking.
*/