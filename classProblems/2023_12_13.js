/**
 * 2023 Dec 13
 * Class-related notes
*/

const size = 4;
const hamster1 = Array(size);
const hamster2 = Array.from(4);
const hamster3 = Array.from("hamster");
const hamster4 = Array.from(Array(4), () => Array.from(Array(4), () => 0))

console.log(hamster1);
console.log(hamster2);
console.log(hamster3);
console.log(hamster4);

const gerbil1 = new Array(size).fill(Array(size).fill([]));
gerbil1[0][0] = "Hi there";
console.log(gerbil1);