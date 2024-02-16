/**
 * 2024 Feb 16
 * https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
 * Alternate capitalization
 */
function capitalize(s){
  const alpha = [];
  const beta = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      alpha.push(s[i].toUpperCase());
      beta.push(s[i].toLowerCase());
    } else {
      beta.push(s[i].toUpperCase());
      alpha.push(s[i].toLowerCase());
    }
  }
  return [alpha.join(""), beta.join("")];
};