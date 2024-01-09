/**
 * 2024 Jan 9
 * https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
 * Take a Ten Minutes Walk
 */

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  }
  const position = [0,0];
  for (const direction of walk) {
    switch (direction) {
        case "n":
        position[1]--;
        break;
        case "s":
        position[1]++;
        break;
        case "e":
        position[0]--;
        break;
        case "w":
        position[0]++;
        break;
        default:
        console.log("Direction not found");
    }
  }
    //console.log(walk, position)
    if (position[0] === 0 && position[1] === 0) {
      return true;
    }
    return false;
  //insert brilliant code here
}