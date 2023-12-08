/**
 * 2023 Dec 8
 * https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
 * Did she say hallo?
 */

function validateHello(greetings) {
  //res =  //regex here/.test(greetings) 
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i;
  return res.test(greetings)
}