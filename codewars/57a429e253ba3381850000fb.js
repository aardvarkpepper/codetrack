/**
 * 2024 Feb 25
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
 * Calculate BMI
 */

function bmi(weight, height) {
  const bmi = weight / (height ** 2)
  let stringReturn;
  if (bmi > 30) {
    stringReturn = "Obese"
  }
  if (bmi <= 30.0) {
    stringReturn = "Overweight"
  }
  if (bmi <= 25.0) {
    stringReturn = "Normal"
  }
  if (bmi <= 18.5) {
    stringReturn = "Underweight"
  }
  return stringReturn
}