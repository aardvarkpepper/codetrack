/**
 * 2024 Feb 12
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/
 * Final Prices With a Special Discount in a Shop
 */

var finalPrices = function (prices) {
  const returnArray = [];
  for (let i = 0; i < prices.length; i++) {
      let pushed = false;
      for (let j = i + 1; j < prices.length; j++) {
          if (prices[j] <= prices[i]) {
              returnArray.push(prices[i] - prices[j]);
              pushed = true;
              break;
          }
      } // for
      if (!pushed) {
          console.log("external", i)
          returnArray.push(prices[i]);
          pushed = true;
      }
  } // for
  return returnArray;
};