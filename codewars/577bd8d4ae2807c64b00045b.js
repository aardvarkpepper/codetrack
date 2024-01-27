/**
 * 2024 Jan 27
 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
 * Two fighters, one winner.
 */

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter2.name === firstAttacker) {
    fighter1.health = fighter1.health-fighter2.damagePerAttack;
    if (fighter1.health <= 0) {
      return fighter2.name
    }
  }
  while (true) {
    fighter2.health = fighter2.health-fighter1.damagePerAttack;
    if (fighter2.health <= 0) {
      return fighter1.name
    }
    fighter1.health = fighter1.health-fighter2.damagePerAttack;
    if (fighter1.health <= 0) {
      return fighter2.name
    }
  }
}