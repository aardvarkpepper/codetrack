/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript
 * Who is going to pay for the wall?
 */

function whoIsPaying(name){
  let trunc;
  if (name.length <= 2) {
    return[name];
  } else {
    trunc = name.slice(0,2);
  }
  return [name, trunc]
  //your code here
}