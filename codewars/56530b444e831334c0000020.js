/**
 * 2024 Feb 3
 * https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
 * Determine offspring sex based on genes XX and XY chromosomes
 */

function chromosomeCheck(sperm) {
  return sperm[1] === "Y" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}