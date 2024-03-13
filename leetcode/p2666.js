/**
 * 2024 Mar 13
 * https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Allow One Function Call
 */

var once = function(fn) {
  let called = false;
  let result;
  return function(...args) {
      if (!called) {
          called = true;
          result = fn.apply(this, args);
          return result;
      }
      return undefined;
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
