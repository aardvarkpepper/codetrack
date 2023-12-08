/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
 * Arguments to Binary addition
 */

function arr2bin(arr){
  console.log("input", arr)
  let iterator = 0;
  for (const each of arr) {
    if (typeof(each) === "number" && isNaN(each)) {
      return 'NaN';
    }
    if (typeof(each) === "number") {
      iterator += each;
    }
  }
  console.log("iterator", iterator);
  return iterator.toString(2);
  // show me the code
}

// input [ true, NaN, 15, 99, NaN ]
// iterator 114