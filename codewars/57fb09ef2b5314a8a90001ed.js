/**
 * 2024 Jan 29
 * https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
 * Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
 */

function replace(s){
  const regexMe = /[aeiou]/gi
  return s.replaceAll(regexMe,"!")
  //coding and coding....
}