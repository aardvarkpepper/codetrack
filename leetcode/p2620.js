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

const counter1 = createCounter(10);
const counter2 = createCounter(20);

console.log([counter1(), counter1(), counter1()]);
console.log([counter1(), counter1(), counter1()]);

// node leetcode/p2620;