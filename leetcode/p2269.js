/**
 * 2024 Dec 4
 * First solution consistently performed poorly on speed and memory.
 */

var divisorSubstrings = function(num, k) {
  numString = String(num);
  let kbeauty = 0;
  for (let i = 0; i < numString.length-k+1; i++) {
      //console.log("loop test");
      const numSlice = parseInt(numString.slice(i,i+k));
      //console.log (numSlice); // should chop leading zeroes
      if (num % numSlice === 0) {
          kbeauty++;
      }
  } // for
  return kbeauty;
};