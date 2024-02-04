/**
 * 2024 Feb 4
 * https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
 * Fix your code before the garden dies!
 */

function rainAmount(mm){
  //   console.log(typeof(mm), mm)
  //   console.log(typeof(40-mm), 40-mm)
      if (mm < 40) {
           return "You need to give your plant " + Number(40-mm) + "mm of water"
      } else {
           return "Your plant has had more than enough water for today!"
      };
  }