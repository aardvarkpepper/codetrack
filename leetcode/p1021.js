/*
2023 Dec 1
https://leetcode.com/problems/remove-outermost-parentheses/
*/

var removeOuterParentheses = function(s) {
  const decomposedArray = [];
  let openLeftP = 0;
  for (const character of s) {
      if (character === "(") {
          openLeftP++;
      };
      if (character === ")") {
          openLeftP--;
      }
      if (openLeftP === 1 && character === "(") {
          continue;
      };
      if (openLeftP === 0 && character === ")") {
          continue;
      };
      decomposedArray.push(character);
  }
  return decomposedArray.join("");
};

/*
Summed up better by
var removeOuterParentheses = function(s) {

  let str=''
  let count=0

  for(let i=0;i<s.length;i++){
    if(s[i]=='('){
      if(count>0)
          str+=s[i]
    count++
    }
    else{
    count--
        if(count>0)
          str+=s[i]
    } 
  }

  return str
    
};
*/