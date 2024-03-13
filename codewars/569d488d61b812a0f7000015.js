/**
 * 2024 Mar 12
 * https://www.codewars.com/kata/569d488d61b812a0f7000015/solutions/javascript
 * Data Reverse
 * 
 */

function dataReverse(data) {
  const arrayStor = [];
  let index = 0;
  while (index < data.length) {
    const subArrayStor = [];
    for (let i = 0; i <= 7; i++) {
      subArrayStor.push(data[index + i])
    }
    arrayStor.push(subArrayStor)
    index += 8;
  }
  return arrayStor.reverse().flat();
}
