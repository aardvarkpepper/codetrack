/**
 * 2024 Jan 16
 * https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
 * Regex validate PIN code
 */

function validatePIN (pin) {
  console.log(pin);
  if (isNaN(Number(pin))) {
    console.log("isNaN")
    return false;
  }
  if (pin.length !== 4 && pin.length !== 6) {
    console.log("Not 4 or 6 length");
    return false;
  }
  if (Number(pin) % 1 !== 0) {
    console.log("Decimal");
    return false;
  }
  if (Number(pin) < 0) {
    console.log("Negative");
    return false;
  }
  return true;
}