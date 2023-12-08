/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
 * Age Range Compatibility Equation
 */

function datingRange(age){
  if (age <= 14) {
    return `${Math.floor(age - 0.1*age)}-${Math.floor(age + 0.1*age)}`
  }
  return `${Math.floor((age / 2) + 7)}-${Math.floor((age-7)*2)}`
  //return min-max
}