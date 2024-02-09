/**
 * 2024 Feb 9
 * https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
 * How old will I be in 2099?
 */

function  calculateAge(born, query) {
  if (query-born === 0) {
    return "You were born this very year!"
  }
  if (query-born === -1) {
    return `You will be born in 1 year.`
  }
  if (query-born === 1) {
    return 'You are 1 year old.'
  }
  if (query-born < 0) {
    return `You will be born in ${born-query} years.`
  }
  return `You are ${query-born} years old.`
// enter your code here.

}