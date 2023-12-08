/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
 * Small enough? - Beginner
 */

function smallEnough(a, limit){
  for (const each of a) {
    if (each > limit) {
      return false;
    }
  }
  return true;
}