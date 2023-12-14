/**
 * 2023 Dec 14
 * https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
 * To Be Or Not To Be
 */

var expect = function(val) {
  return {
      toBe(newVal) {
          if (val === newVal) return true;
          throw new Error("Not Equal");
      },
      notToBe(anotherVal) {
          if (val !== anotherVal) return true;
          throw new Error("Equal");
      }
  }
};