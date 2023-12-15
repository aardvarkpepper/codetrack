/**
 * 2023 Dec 15
 * https://leetcode.com/problems/destination-city/description/
 * Destination City
 */

var destCity = function(paths) {
  /*
  Iterate for all elements.
  If element not in map, set element to index.
  If element in map, remove element.
  Iterate through elements return element with index 1.
  */
  const mappy = new Map();

  const processMap = (value, index) => {
      if (mappy.has(value)) {
          mappy.delete(value);
      } else {
          mappy.set(value, index)
      }
  } // processMap

  for (const path of paths) {
      processMap(path[0], 0);
      processMap(path[1], 1);
  }

  for (const [key, value] of mappy) {
      if (value === 1) {
          return key;
      }
  }
};