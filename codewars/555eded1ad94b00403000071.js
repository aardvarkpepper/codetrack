/**
 * 2024 Feb 8
 * https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
 * Sum of the first nth term of Series
 */

function SeriesSum(n)
{
  const dummkopf = 3;
  let deficiente = 1;
  
  for (let i = 2; i <= n; i++) {
    deficiente += 1/(1+((i-1)*3))
  }
  if (n === 0) {
    return "0.00"
  }
  return String(deficiente.toFixed(2))
  
  // Happy Coding ^_^
}