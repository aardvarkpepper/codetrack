/**
 * 2024 Jan 29
 * https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
 * Difference of Volumes of Cuboids
 */

function findDifference(a, b) {
  const cuboid = (arrayInput) => {
    return arrayInput[0] * arrayInput[1] *arrayInput[2]
  }
  return Math.abs(cuboid(a) - cuboid(b))
  //loading...
}