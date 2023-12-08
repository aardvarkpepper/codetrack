/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
 * Duck Duck Goose
 */

function duckDuckGoose(players, goose) {
  while (goose > players.length) {
    goose = goose - players.length;
  }
  return players[goose - 1].name;
  // ...
}