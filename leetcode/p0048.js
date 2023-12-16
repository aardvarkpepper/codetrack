/**
 * 2023 Dec 16
 * https://leetcode.com/problems/rotate-image/description/
 * Rotate Image
 */

var rotate = function (matrix) {
  /*
  0,0 => 2,0
  2,0 => 2,2
  2,2 => 0,2
  0,2 => 0,0

  1,0 => 3,1
  3,1 => 2,3
  2,3 => 0,2
  0,2 => 1,0

  12345
  67890
  abcde
  fghij
  klmno

  1234
    78
  */

  let length = matrix.length;

  let it = 0; // iterator
  let len = length; // currentNLength
  let ref = 0; // currentXYIndex
  let refEnd = length - 1;


  while (len > 1) {
      //console.log("it, len, ref, refEnd", it, len, ref, refEnd);
      //The first element of row already exchanged with last element.
      //So only iterates to length-1.
      while (it < len - 1) {
          [
              matrix[ref][ref + it],
              matrix[ref + it][refEnd],
              matrix[refEnd][refEnd - it],
              matrix[refEnd - it][ref],
          ] = [
                  matrix[refEnd - it][ref],
                  matrix[ref][ref + it],
                  matrix[ref + it][refEnd],
                  matrix[refEnd][refEnd - it],
              ];
          it++;
      }
      it = 0;
      len = len - 2;
      ref++;
      refEnd--;
  }
  return matrix;
};