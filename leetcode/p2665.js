/**
 * 2023 Dec 15
 * https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 * Counter II
 */

var createCounter = function(init) {
  const initial = init;
  return {
      increment(){
          return ++init;
      },
      decrement(){
          return --init;
      },
      reset(){
          init = initial;
          return init;
      }
  }
};