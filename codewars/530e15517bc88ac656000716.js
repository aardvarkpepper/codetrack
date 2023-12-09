/**
 * 2023 Dec 9
 * https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
 * Rot13
 */

function rot13(message){
  const conditional = /[a-zA-Z]/;
  const adjustLow = "a".charCodeAt();
  const adjustCap = "A".charCodeAt();
  const messageSplit = message.split("");
  console.log("messageSplit", messageSplit)
  const arrayOut = [];
  for (const each of messageSplit) {
    console.log("iterate", each)
    const isUpper = (each === each.toUpperCase());
    if (!conditional.test(each)) {
      arrayOut.push(each);
    } else {
      if (isUpper) {
        const newCharRef = ((each.charCodeAt() - adjustCap) + 13) % 26 + adjustCap;
        const newChar = String.fromCharCode(newCharRef);
        console.log("Caps", newChar);
        arrayOut.push(newChar);
      } else {
        const newCharRef = ((each.charCodeAt() - adjustLow) + 13) % 26 + adjustLow;
        const newChar = String.fromCharCode(newCharRef);
        console.log("Lowers", newChar);
        arrayOut.push(newChar);
      }
    } // for
  }
  return arrayOut.join("");
  //your code here
}