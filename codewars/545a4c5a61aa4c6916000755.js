/**
 * 2024 Feb 18
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
 * Find the middle element
 */

function gimme (triplet) {
  const triple = [...triplet]
  return triplet.indexOf(triple.sort((a,b) => a-b)[1])
}