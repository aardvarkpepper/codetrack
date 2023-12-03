/*
2023 Dec 3
https://leetcode.com/problems/asteroid-collision/
*/

var asteroidCollision = function (asteroids) {
  /*
  Asteroids is non-empty array.  Testcases group positives then group negatives.
  But grouping is not a stricture.  e.g. [5,-2,4,-3] may be allowed.
  Asteroids heading right (positive) collide with asteroids heading left (negative).
  If the array starts with asteroids heading left, those asteroids can't collide with anything.  So if negative, push to resultsArray (initially)
  First positive also pushes to resultsArray.
  Collision only occurs if positive followed by negative;

  resultsArray = [];
  for asteroid of asteroids
  if resultsArray[resultsArray.length-1] < 0
    push resultsArray(asteroid), continue
  else // asteroids[i] !== 0 constraint
    if asteroid > 0, resultsArray.push(asteroid), continue
    // we know resultsArray is +.  another + asteroid just adds.
    if asteroid < 0
    while (resultsArray[resultsArray.length-1] > 0) {
        // test if resultsArray[-1] > 0 returns false. 
        // const hamster = [];
        // console.log(hamster[-1] > 0);
        // false success
        lastElement = resultsArray.pop();
        if lastElement + asteroid = 0 break; // exits while but not for
        if lastElement + asteroid > 0 resultsArray.push(lastElement) break
        // small - "asteroid" obliterated.
        // exits while but not for
        else // small "lastElement" obliterated
        continue // remains within the while loop, keeps removing + elements
        // continues smashing with - asteroid.
    }
    if (!(resultsArray[resultsArray.length-1] > 0))
    resultsArray.push(asteroid) // all resultsArray should be -.
    // suppose - asteroid NOT smash all extant resultArray +'s.
    // then do nothing.
    // suppose - asteroid smashes all extant resultArray +'s.
    // OR resultsArray is empty.  Then push.
  */
  const resultsArray = [];
  for (const asteroid of asteroids) {
      if (!(resultsArray[resultsArray.length - 1] > 0)) {
          // handles if array empty or last asteroid -
          resultsArray.push(asteroid);
          continue;
      } else { // resultsArray has + asteroid as last element.
          if (asteroid > 0) {
              resultsArray.push(asteroid);
              //console.log("resultsArray1", resultsArray);
              continue;
          } else {
              let isAsteroidDestroyed = false;
              while (resultsArray[resultsArray.length - 1] > 0) {
                  let lastElement = resultsArray.pop();
                  if (lastElement + asteroid === 0) {
                      //console.log("cancelled", resultsArray);
                      isAsteroidDestroyed = true;
                      break;
                  } else if (lastElement + asteroid > 0) {
                      resultsArray.push(lastElement);
                      isAsteroidDestroyed = true;
                      break;
                      // else if lastElement + asteroid > 0
                  } else {
                      continue;
                  }
              } // while
              // if asteroid not destroyed, push
              if (!isAsteroidDestroyed) {
                  resultsArray.push(asteroid);
              }
          } // else, asteroid < 0
      } // else, resultsArray[resultsArray.length - 1] > 0;
  } // for asteroid of asteroids
  return resultsArray;
}