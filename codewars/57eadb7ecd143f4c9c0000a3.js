/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
 * Abbreviate a Two Word Name
 */

function abbrevName(name){
  const strSplit = name.split(" ");
  return `${strSplit[0][0].toUpperCase()}.${strSplit[1][0].toUpperCase()}`
    // code away
}