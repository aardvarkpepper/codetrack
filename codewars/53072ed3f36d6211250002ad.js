/**
 * 2023 Dec 5
 * https://www.codewars.com/kata/53072ed3f36d6211250002ad/train/javascript
 * Recursive countdown
 */

/*
First build fails "very big countdown tests checking memory issues with 10000 steps"
"Maximum call stack size exceeded"
(more error message follows)

Realized spread operator was wasting time and I should just push; refactored.

$ node codewars/recursive-countdown.js
node:vm:360
  const result = _compileFunction(
                 ^

RangeError: Maximum call stack size exceeded
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1048:15)
    at Module._compile (node:internal/modules/cjs/loader:1083:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1173:10)
    at Module.load (node:internal/modules/cjs/loader:997:32)
    at Module._load (node:internal/modules/cjs/loader:838:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:18:47a
*/

// function countdown(times, returnArray = []) {
//   if (times >= 0) {
//     return [...returnArray, 0];
//   }
//   const ctdnReturn = (negativeIncrement = 0) => {
//     console.log("times", countdown(times+1+negativeIncrement, [...returnArray, -times]));
//     return countdown(times+1+negativeIncrement, [...returnArray, -times]);
//   }
//   return ctdnReturn;
// }

// console.log(countdown(-10)()()()()()()()()()());

// const helper = (input) => {
//   let returnString = `countdown(${input})`
//   for (i = input; i < 0; i++) {
//     returnString += "()";
//   }
//   console.log(returnString)
// }

// helper (-1000);

/*
function countdown(times, returnArray = []) {
  if (times >= 0) {
    return [...returnArray, 0];
  }
  // const ctdnReturn = (negativeIncrement = 0) => {
  //   return countdown(times+1+negativeIncrement, [...returnArray, -times]);
  // }
  // return ctdnReturn;
  return (negativeIncrement = 0) => {
    return countdown(times+1+negativeIncrement,[...returnArray,-times]);
  }
}

// function countdown(times) {
//   const iterate = (currentTimes, returnArray = []) => {
//     if (currentTimes >= 0) {
//       return [...returnArray, 0];
//     }
//     return iterate(currentTimes + 1, [...returnArray, -currentTimes]);
//   };

//   return iterate(times);
// }
/*
The array, containing the countdown history, is returned only when the countdown reaches zero. If the countdown is not zero, a function is returned, decreasing by one the countdown.
*/

// console.log(countdown(0)) // [ 0 ];
//  console.log(countdown(-1)()) // [ 1, 0 ];
// console.log(countdown(-2)()()) // [ 2, 1, 0 ];
// console.log(countdown(-3)()()()) // [ 3, 2, 1, 0 ]);
// console.log(countdown(5)) // [ 0 ]);
// console.log(countdown(-2)(+1)) // [ 2, 0 ]);
// console.log(countdown(-5)()()()()()) // [ 5, 4, 3, 2, 1, 0 ]);
// console.log(countdown(-5)(+2)()()) // [ 5, 2, 1, 0 ]);
// console.log(countdown(-5)()(+2)()) // [ 5, 4, 1, 0 ]);
// console.log(countdown(-5)(+1)()(+1)) // [ 5, 3, 2, 0 ]);
// console.log(countdown(-5)(+20)) // [ 5, 0 ]);
// console.log(countdown(-1)(-1)()) // [ 1, 1, 0 ]);
// console.log(countdown(-1)(-1)(-1)()) // [ 1, 1, 1, 0 ]);
// console.log(countdown(-2)()(-1)()) // [ 2, 1, 1, 0 ]);
// console.log(countdown(-1)(-3)()()()) // [ 1, 3, 2, 1, 0 ]);
// console.log(countdown(-3)(-5)()(+2)(-1)()()()) // [ 3, 7, 6, 3, 3, 2, 1, 0 ])

function countdown(times, returnArray = []) {
  if (times >= 0) {
    returnArray.push(0);
    return returnArray;
  }
  const ctdnReturn = (negativeIncrement = 0) => {
    returnArray.push(-times);
    return countdown(times+1+negativeIncrement, returnArray);
  }
  return ctdnReturn;
}