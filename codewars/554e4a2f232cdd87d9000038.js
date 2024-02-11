/**
 * 2024 Feb 11
 * https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
 * Complementary DNA
 */

function dnaStrand(dna){
  let arrayStor = [];
  for (const character of dna) {
    if (character === "A") {
      arrayStor.push("T");
    }
        if (character === "T") {
      arrayStor.push("A");
    }
        if (character === "C") {
      arrayStor.push("G");
    }
        if (character === "G") {
      arrayStor.push("C");
    }
  }
  return arrayStor.join("");
}