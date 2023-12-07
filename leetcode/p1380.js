var luckyNumbers  = function(matrix) {
  let iIndex = [];
  let jIndex = [];
  for (let i = 0; i < matrix.length; i++) {
      let localMin = Infinity;
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] < localMin) {
              localMin = matrix[i][j];
          }
      }
      jIndex.push(localMin);
  }
  for (let i = 0; i < matrix[0].length; i++) {
      let localMax = -Infinity;
      for (let j = 0; j < matrix.length; j++) {
          if (matrix[j][i] > localMax) {
              localMax = matrix[j][i];
          }
      }
      iIndex.push(localMax);
  }
  //console.log("iIndex", iIndex);
  //console.log("jIndex", jIndex);
  for (const each of iIndex) {
      if (jIndex.includes(each)) {
          return [each];
      }
  }
  return [];
};

//console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));
//console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));
//console.log(luckyNumbers[[7,8],[1,2]])
console.log(luckyNumbers([[3,6],[7,1],[5,2],[4,8]]));