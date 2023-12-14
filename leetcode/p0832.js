/**
 * 2023 Dec 14
 * https://leetcode.com/problems/flipping-an-image/description/
 * Flipping an Image
 */

var flipAndInvertImage = function(image) {
  console.log(image)
  for (const row of image) {
      for (let i = 0; i < Math.floor(image.length/2); i++) {
          [row[i], row[row.length-1-i]] = [1-row[row.length-1-i], 1-row[i]]
      }
      if (row.length % 2 === 1) {
          row[Math.floor(row.length/2)] = 1-row[Math.floor(row.length/2)]
      }
  }
  return image;
};