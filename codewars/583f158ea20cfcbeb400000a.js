/**
 * 2024 Jan 23
 * https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
 * Make a function that does arithmetic!
 */

function arithmetic(a, b, operator){
  switch (operator) {
      case "add":
      return a + b;
      break;
      case "subtract":
      return a - b;
      break;
      case "divide":
      return a / b;
      break;
      case "multiply":
      return a * b;
      break;
      default:
      return "Error";
  }
  //your code here!
}