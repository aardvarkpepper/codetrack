/**
 * 2023 Dec 24
 * https://leetcode.com/problems/image-smoother/description/
 * Image Smoother
 */

var imageSmoother = function(img) {
  const xLength = img[0].length;
  const yLength = img.length;
  const smoothMatrix = Array.from(Array(yLength), () => Array(xLength));

  const isValid = (yIndex, xIndex) => {
      let inRange = true;
      if (yIndex < 0 || yIndex >= yLength) {
          inRange = false;
      }
      if (xIndex < 0 || xIndex >= xLength) {
          inRange = false;
      }
      return inRange;
  }
  for (i = 0; i < yLength; i++) {
      for (j = 0; j < xLength; j++) {
          let validCount = 0;
          let validTotal = 0;
          for (k = i-1; k <= i+1; k++) {
              for (l = j-1; l <= j+1;l++) {
                  //console.log("kl", k, l, isValid(k,l))
                  if (isValid(k, l)) {
                      validCount++;
                      validTotal += img[k][l]
                  }
              }
          }
          //console.log(i, j, validCount, validTotal)
          smoothMatrix[i][j] = Math.floor(validTotal / validCount);
          // get existing cells and count.
      }
  }
  return smoothMatrix;
};