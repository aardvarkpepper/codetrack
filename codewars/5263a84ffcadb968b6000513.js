/**
 * 2023 Dec 16
 * https://www.codewars.com/kata/5263a84ffcadb968b6000513/train/javascript
 * Square Matrix Multiplication
 */

function matrixMultiplication(a, b){
  const length = a.length;
  const multMatrix = Array.from(Array(length), () => Array(length));
  console.log(length, multMatrix);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let sum = 0;
      for (let k = 0; k < length; k++) {
        sum+= a[i][k] * b[k][j];
      }
      multMatrix[i][j] = sum;
    }
  }
  return multMatrix;
  //TODO  
}