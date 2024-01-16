/**
 * 2024 Jan 16
 * https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
 * I love you, a little , a lot, passionately ... not at all
 */

function howMuchILoveYou(nbPetals) {
  nbPetals = (nbPetals - 1) % 6
  switch (nbPetals) {
      case 0:
      return "I love you";
      break;
      case 1:
      return "a little";
      break;
      case 2:
      return "a lot";
      break;
      case 3:
      return "passionately";
      break;
      case 4:
      return "madly";
      break;
      case 5:
      return "not at all";
      break;
      default:
      return "Error";
  }
    // your code
}
