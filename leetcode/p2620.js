/**
 * 2023 Dec 14
 * https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 * Counter
 */

var createCounter = function(n) {
  return function() {
      return n++;
  };
};