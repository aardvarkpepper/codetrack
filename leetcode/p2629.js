/**
 * 2023 Dec 20
 * https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
 * Function Composition
 */

var compose = function(functions) {
  return function(x) {  
      let comp = x;
      for (let i = functions.length-1; i>=0; i--) {
          comp = functions[i](comp)
      }
      return comp;
  }
};