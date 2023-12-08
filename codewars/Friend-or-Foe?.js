/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
 */

function friend(friends){
  let friendArray = [];
  for (const each of friends) {
    if (each.length === 4) {
      friendArray.push(each);
    }
  }
  return friendArray;
  //your code here
}