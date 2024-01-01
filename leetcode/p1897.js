/**
 * 2024 Jan 1
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 * 1897. Redistribute Characters to Make All Strings Equal
 */

var makeEqual = function(words) {
  //console.log("words", words)
  const wordCount = words.length;
  const mapStore = new Map();
  for (const word of words) {
      for (const character of word) {
          if (mapStore.has(character)) {
              mapStore.set(character, mapStore.get(character)+1)
          } else {
              mapStore.set(character, 1)
          }
      }
  };
  //console.log(mapStore);
  for (const each of mapStore) {
      // example of each: ['a', 3]
      if (each[1] % wordCount !== 0) {
          return false;
      }
  }
  return true;
};

/*
Faster implementation below.  Some escape clauses for earlier termination.
*/

var makeEqual = function(words) {
  if (words.length === 1) {
      return true;
  }

  let totalCharCount = 0;
  for (const s of words) {
      totalCharCount += s.length;
  }

  if (totalCharCount % words.length !== 0) {
      return false;
  }

  let myMap = new Array(26).fill(0);
  for (const s of words) {
      for (const c of s) {
          myMap[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
  }

  for (const i of myMap) {
      if (i % words.length !== 0) {
          return false;
      }
  }

  return true;
};