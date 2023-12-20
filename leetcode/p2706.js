/**
 * 2023 Dec 20
 * https://leetcode.com/problems/buy-two-chocolates/description/
 * Buy Two Chocolates
 */

var buyChoco = function(prices, money) {
  let lowest = Infinity;
  let secondLowest = Infinity;
  for (const price of prices) {
      if (price < lowest) {
          secondLowest = lowest;
          lowest = price;
      } else {
          if (price < secondLowest) {
              secondLowest = price;
          }
      }
  }
  const moneyLeft = money - lowest - secondLowest;
  return moneyLeft < 0 ? money : moneyLeft; 
};