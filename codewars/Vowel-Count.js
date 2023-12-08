/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
 */

function getCount(str) {
  const vowels = "aeiou";
  iterator = 0;
  for (const each of str) {
    if (vowels.includes(each)) {
      iterator++;
    }
  }
  return iterator;
}