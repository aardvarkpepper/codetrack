/**
 * 2024 Jan 12
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
 * Determine if String Halves Are Alike
 */

var halvesAreAlike = function(s) {
  const vowels = "aeiouAEIOU";
  const vowelCount = (string) => {
      let numberOfVowels = 0;
      for (const character of string) {
          if (vowels.includes(character)) {
              numberOfVowels++;
          }
      }
      return numberOfVowels;
  }
  const leftString = s.slice(0, s.length/2);
  const rightString = s.slice(s.length/2);
  //console.log(s, leftString, rightString);
  return (vowelCount(leftString) === vowelCount(rightString));
};