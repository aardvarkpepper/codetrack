/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
 */

var number = function(busStops){
  iterator = 0;
  for (const each of busStops) {
    iterator += each[0] - each[1];
  }
  return iterator;
}