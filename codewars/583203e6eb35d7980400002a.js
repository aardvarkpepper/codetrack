/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
 * Count the smiley faces!
 */

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = new Set ([":", ";"]);
  const nose = new Set (["-", "~"]);
  const mouth = new Set ([")", "D"]);
  let count = 0;
  for (const face of arr) {
    if (!eyes.has(face[0])) {
      continue;
    }
    if (!mouth.has(face[1])) {
      if (!nose.has(face[1])) {
        continue; // if it's not a mouth or a nose then exit
      } else {
        if (!mouth.has(face[2])) {
          continue; // if it has a nose but no mouth then exit
        }
      }
    }
    count++
  } // for
  return count;
}