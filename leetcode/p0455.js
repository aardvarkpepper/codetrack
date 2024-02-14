/**
 * Started 2024 Jan 3
 * Finished 2024 Feb 14 (cleaning up backlog)
 * https://leetcode.com/problems/assign-cookies/
 * Assign Cookies
 * */

var findContentChildren = function(g, s) {
  g.sort((a,b) => Number(a) - Number(b));
  s.sort((a,b) => Number(a) - Number(b));
  //console.log("sorted", g, s)
  let contentChildren = 0;
  let currentChildIndex = 0;
  for (let i = 0; i < s.length; i++) {
      //console.log("s[i]", s[i], "g[currentChildIndex]", g[currentChildIndex]);
      if (s[i] >= g[currentChildIndex]) {
          contentChildren++;
          currentChildIndex++;
      }
  }
  return contentChildren;
};