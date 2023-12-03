/*
2023 Dec 3
https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
*/

var maxDepth = function(s) {
  /*
  Contains 0-9, +, -, *, /, (, )
  s is guaranteed VPS
  VPS includes "", single character, concatenations of single characters,
  and (A).  But does this mean ((A))?
  An expression "nests" within sets of parentheses, each "set" depth++.
  Iterate through string, If (, increment localdepth.  If localdepth > max set max to localdepth.  If ) decrement localdepth.
  I don't see how stack operation increases speed here.
  */
  let localDepth = 0;
  let maxDepth = 0;
  for (const character of s) {
      if (character === "(") {
          localDepth++;
          if (localDepth > maxDepth) {
              maxDepth = localDepth;
          }
      } // if "("
      else if (character === ")") {
          localDepth--;
      }
  } // for
  return maxDepth;
};

/*
"Faster" solution used Array.from and .forEach but essentially the same logic.  Also used Math.max for comparison.

It seems Math.max may be more efficient for comparisons; it's used in multiple solutions.

var maxDepth = function(s) {
  maxC = 0
  curC=0
  Array.from(s).forEach(ch => {
      if(ch=== '('){
          maxC = Math.max(++curC, maxC)
      }else if(ch=== ')'){
          curC--;
      }
  })
  return maxC
};
*/