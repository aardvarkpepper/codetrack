/**2023 Dec 7
 * https://leetcode.com/problems/richest-customer-wealth/description/
 */

var maximumWealth = function(accounts) {
  let max = 0;
  for (const customer of accounts) {
    const sum = customer.reduce((a,b) => a+b);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};