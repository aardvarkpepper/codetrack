/**
 * 2023 Dec 24
 * https://leetcode.com/problems/path-crossing/
 * Path Crossing
 */


var isPathCrossing = function(path) {
  const objStor = {};
  const currentPos = [0,0];
  objStor[currentPos] = true;
  /*
  There are issues with using arrays as object keys that above practice avoids.
  */
  const dirToCoord = (direction) => {
      switch (direction) {
          case "N":
          currentPos[1] = currentPos[1]-1;
          break;
          case "S":
          currentPos[1] = currentPos[1]+1;
          break;
          case "E":
          currentPos[0] = currentPos[0]-1;
          break;
          case "W":
          currentPos[0] = currentPos[0]+1;
          break;
          default:
          console.log("Input not N, S, E, or W");
      }
      return currentPos;
  }
  for (const direction of path) {
      const newCoord = dirToCoord(direction);
      if (!objStor[newCoord]) {
          objStor[newCoord] = true;
      } else {
          return true;
      }
  }
  return false;
};