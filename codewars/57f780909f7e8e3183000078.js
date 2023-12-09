/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 * Beginner - Reduce but Grow
 */

function grow(x){
  let iterator = x[0];
  for (let i = 1; i < x.length; i++) {
    iterator *= x[i]
  }
  console.log(x, iterator)
  return iterator;
}