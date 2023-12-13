/**
 * 2023 Dec 13
 * https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
 * Create Hello World Function
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
  const funcRet = () => {
      return "Hello World";
  }
  
  return funcRet;
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/