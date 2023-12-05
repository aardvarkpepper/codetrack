/**
 * 2024 Dec 5
 * https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript
 */

function decode(message){
  //   console.log(" ".charCodeAt(0)); // 32
  //   console.log("a".charCodeAt(0)); // 97
  //   console.log("z".charCodeAt(0)); // 122
  console.log(message);
  const messageSplit = message.split("");
  for (let i = 0; i < messageSplit.length; i++) {
    if (!(messageSplit[i] === " ")) {
      console.log("pre", messageSplit[i]);
      messageSplit[i] = String.fromCharCode(219-messageSplit[i].charCodeAt(0));
      console.log("post", messageSplit[i]);
    }
  }
  return messageSplit.join("");
}