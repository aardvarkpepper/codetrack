/**
 * 2023 Dec 26
 * https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
 * Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
 */

function remove (string) {
  const prePut = string.replaceAll("!","");
  return prePut + "!"
  
  //coding and coding....
}