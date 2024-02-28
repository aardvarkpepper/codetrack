/**
 * 2024 Feb 28
 * https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 * Find the capitals
 */

var capitals = function (word) {
  const retArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      retArr.push(i)
    }
  }
  return retArr;
	// Write your code here
};