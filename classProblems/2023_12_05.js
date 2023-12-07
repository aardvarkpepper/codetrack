/**
 * 2023 Dec 5
 * https://replit.com/@JamesLee115/InformalLameArtificialintelligence#index.js
 */

// Warmup

// 1. create a variable called string and assign it a string 

const string = "it a string";
console.log(string);


// 2. Create a function that takes a string and console logs every letter

const logEachLetter = (string) => {
  for (const letter of string) {
    console.log(letter);
  }
}

logEachLetter(string);

// 3. create a function that takes an array of different values and prints the falsey values 
const diffValuesArr = [1, null, "hi", 0, 343, [1,0], undefined, true, false, {key: "value"}]

const logFalseyOfArray = (array) => {
  for (const each of array) {
    if (!each) {
      console.log(each);
    }
  }
}

logFalseyOfArray(diffValuesArr);

// 4. Create a function that takes a string and returns an object where the keys are the character and the value is the count of the character

const objectFromString = (string) => {
  const objStor = {}
  for (const each of string) {
    if (objStor[each]) {
      objStor[each]++
    } else {
      objStor[each] = 1;
    }
  }
  return objStor;
}

console.log(objectFromString(string));