/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
 * GA-DE-RY-PO-LU-KI cypher
 */

const cypher = {
  g: "a",
  a: "g",
  d: "e",
  e: "d",
  r: "y",
  y: "r",
  p: "o",
  o: "p",
  l: "u",
  u: "l",
  k: "i",
  i: "k"
}

function encode(str) 
{
  console.log(str);
  const arrayStor = [];
  for (const each of str) {
    console.log(each)
    let upper;
    if (each === each.toUpperCase()) {
      upper = true;
    } else {
      upper = false;
    }
    if (!cypher[each.toLowerCase()]) {
      arrayStor.push(each)
    } else {
      if (upper) {
        arrayStor.push(cypher[each.toLowerCase()].toUpperCase());
      } else {
        arrayStor.push(cypher[each])
      }
    }
  }
    return arrayStor.join("");  
}

function decode(str) 
{
    return encode(str) 
}