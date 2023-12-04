/*
2023 Dec 3-4
https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/
*/

/*
First iteration consistently performed poorly on speed and memory.
Created second iteration.

var countCharacters = function (words, chars) {
  let sumLength = 0;
  
  /*
  For memory usage and speed, Hector (Qiliang Zhong) correctly uses an array of 
  lowercase letters (possibly off unicode).  Array reference/overwrite is, I
  think, faster.  Rather than look up unicode reference, though, I used object.
  >.>
  */
 /*
  const stringToObject = (string) => {
      let charObjStor = {}
      for (const character of string) { // "in" prints index reference
          if (charObjStor[character]) {
              charObjStor[character]++
          } else {
              charObjStor[character] = 1;
          }
      } // for
      return charObjStor;
  } // stringToObject anonymous function
  const charObj = stringToObject(chars);
  for (const word of words) {
      let wordFound = true;
      const wordObj = stringToObject(word);
      const wordObjKeys = Object.keys(wordObj);
      //console.log("charObj", charObj, "wordObj", wordObj);
      for (const keyCharacter of wordObjKeys) {
          if (!charObj[keyCharacter]) {
              //console.log("character not found", keyCharacter)
              wordFound = false;
          }
          if (wordObj[keyCharacter] > charObj[keyCharacter]) {
              //console.log("insufficient count", keyCharacter);
              wordFound = false;
          }
      }
      if (wordFound) {
          sumLength += word.length;
      }
  } // for word of words
  return sumLength;
};
*/

var countCharacters = function (words, chars) {
  /*
  After initial inefficient (5% speed and memory) using objects
  rewriting as array reference.  Thanks to Hector (Qiliang Zhong)
  */
  const arrayStor = new Array(26).fill(0);
  const adjust = "a".charCodeAt(0);
  for (const character of chars) {
      arrayStor[character.charCodeAt(0)-adjust]++;
  };
  let lengthSum = 0;
  for (const word of words) {
      let copy = arrayStor.slice();
      let isWordFound = true;
      for (const character of word) {
          const characterValue = character.charCodeAt(0)-adjust
          copy[characterValue]--;
          if (copy[characterValue] < 0) {
              isWordFound = false;
          }
      } // for character
      if (isWordFound) {
          lengthSum += word.length;
      }
  } // for word
  return lengthSum;
};