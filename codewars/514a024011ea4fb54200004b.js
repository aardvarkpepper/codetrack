/**
 * 2023 Jan 7
 * https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript
 * Extract the domain name from a URL
 */

function domainName(url){
  console.log(url)
  const split = url.split("://")[1];
  if (split) {
    const split3 = split.split(".");
    if (split3[0] === "www") {
      return split3[1]
    } else {
      return split3[0]
    }
  }
  const split2 = url.split(".");
  if (split2[0] === "www") {
    return split2[1]
  } else {
    return split2[0]
  }
  //your code here
}