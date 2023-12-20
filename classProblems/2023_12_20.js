/**
 * 2023 Dec 20
 * https://the-winter.github.io/codingjs/exercise.html?name=sleepIn&title=Warmup-1
 */

function sleepIn(weekday, vacation){
  return (!weekday || vacation)
}

/**
 * https://the-winter.github.io/codingjs/exercise.html?name=doubleX&title=Warmup-2
 */

function doubleX(str){
  const firstX = str.indexOf("x");
  return str[firstX+1] === "x";
}