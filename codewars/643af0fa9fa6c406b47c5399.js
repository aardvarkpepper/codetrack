/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/train/javascript
 * Quadrants
 */

function quadrant(x, y) {
  if (x > 0) {
    if (y > 0) {
      return 1
    }
    return 4
  }
  if (y > 0) {
    return 2
  }
  return 3
  // Poveli!
}