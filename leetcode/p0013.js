/**
 * 2023 Dec 20
 * https://leetcode.com/problems/roman-to-integer/
 * Roman to Integer
 */

var romanToInt = function(s) {
  console.log(s);
  let romanSum = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "C") {
          if (s[i+1] === "D") {
              i++;
              romanSum += 400;
          } else if (s[i+1] === "M") {
              i++;
              romanSum += 900;
          } else {
              romanSum += 100;
          }
          continue;
      } // C
      if (s[i] === "X") {
          if (s[i+1] === "L") {
              i++;
              romanSum += 40;
          } else if (s[i+1] === "C") {
              i++;
              romanSum += 90;
          } else {
              romanSum += 10;
          }
          continue;
      } // X
      if (s[i] === "I") {
          if (s[i+1] === "V") {
              i++;
              romanSum += 4;
          } else if (s[i+1] === "X") {
              i++;
              romanSum += 9;
          } else {
              romanSum += 1;
          }
          continue;
      } // I
      if (s[i] === "D") {
          romanSum += 500;
      }
      if (s[i] === "M") {
          romanSum += 1000;
      }
      if (s[i] === "V") {
          romanSum += 5;
      }
      if (s[i] === "L") {
          romanSum += 50;
      }
  }
  return romanSum;
};