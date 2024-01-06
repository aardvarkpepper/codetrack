/**
 * Not finished
 * 2024 Jan 3
 * https://leetcode.com/problems/assign-cookies/
 * Assign Cookies
 * 
 * Constraints:
 * 1 <= g.length <= 3 * 10^4.
 * 0 <= s.length < = 3 * 10^4.
 * 1 <= g[i], s[j] <= 2^31-1
 * 
 * Pretty clearly needs to be sorted; combinations just aren't good at all.
 * But then, what is best approach?
 * Binary search better on time; some ideas on implementation, suppose we take
 * midpoint of s (cookies) and g (children).
 * 
 * Suppose cookies 2,2,2,2,5
 *        children 3,3,3,3,5
 * 
 * Midpoint of cookies is 2, midpoint of children 3.
 * We don't know if the first element of chidren may be 1 or 2.
 * So we iterate binary search backwards through children to find >=.
 * 
 * Here we won't find it, so then we binary search forwards through cookies.
 * Eventually we find 5 > 3.
 * 
 * Suppose cookies 20,20,20,20,50
 *        children 10,10,10,10,50
 * 
 * Midpoint of cookies is 20, midpoint of children 10.
 * But we don't know whether previous cookies were satisfying.
 * For example, maybe we had 9,9,20,20,50.  We don't know.
 * So we iterate binary search backwards through cookies.
 * 
 * But all this logic ignores simple case
 * 
 * cookies 20,20,20,20,20,40,70
 * children 1,1,1,1,1
 * 
 * If we test first element of cookies against last element of children, then
 * we have Math.max(cookies.length, children.length) content children.
 * (can't have more content children than children, or than cookies)
 * 
 * Well anyways, I tried iterative solution, and that should work okay.
 * */

var findContentChildren = function(g, s) {
  g.sort();
  s.sort();
  let contentChildren = 0;
  let currentChildIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[currentChildIndex]) {
      contentChildren++;
      currentChildIndex++;
      continue;
    }
  }
  return contentChildren;
};

console.log(findContentChildren([10,9,8,7],[5,6,7,8]) === 2);
console.log(findContentChildren([1,2],[1,2,3]) === 2);
console.log(findContentChildren([3,1,2,4],[1,2,3,4]) === 4);
console.log(findContentChildren([2,3,4],[1,2,3]) === 2);
