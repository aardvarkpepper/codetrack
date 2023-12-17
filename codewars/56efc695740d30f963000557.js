/**
 * 2023 Dec 16
 * https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 */

String.prototype.toAlternatingCase = function () {
  const splits = this.split("");
  const altArray = [];
  for (let i = 0; i < splits.length; i++) {
    if (splits[i] === splits[i].toUpperCase()) {
      altArray.push(splits[i].toLowerCase());
    } else {
      altArray.push(splits[i].toUpperCase());
    }
  }
  return altArray.join("");
  // Define your method here :)
}