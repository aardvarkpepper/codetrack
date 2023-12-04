/**
 * 2023 Dec 4
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */

function birthday(s, d, m) {
  // length month, sum day
  if (m > s.length) {
      return 0;
  }
  let count = 0;
  let numberSum = 0;
  for (let i = 0; i < m; i++) {
      numberSum += s[i];
  }
  if (numberSum === d) {
      count++;
  }
  for (let j = m; j < s.length; j++) {
      numberSum += s[j] - s[j-m];
      if (numberSum === d) {
          count++;
      }
  }
  return count;
}

/**
 * First time I solved a long time ago, I used nested loop.  >.> refactored
 */