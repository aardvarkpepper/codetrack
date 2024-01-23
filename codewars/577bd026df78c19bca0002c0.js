/**
 * 2024 Jan 23
 * https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
 * Correct the mistakes of the character recognition software
 */

function correct(string)
{
  return string.replaceAll("5", "S").replaceAll("0","O").replaceAll("1","I")
	// your code here
}