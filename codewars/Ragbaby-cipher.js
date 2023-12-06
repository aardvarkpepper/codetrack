/**
 * 2024 Dec 6 
 * https://www.codewars.com/kata/5a2166f355519e161a000019/train/javascript
 * Ran into some issues with testing for nonalpha (solved with regexp)
 * Then ran into modulo issue in decrypt; solved.
 */

const keyToArray = (key) => {
  const adjust = "a".charCodeAt(0);
  const characterArray = Array(26).fill(1);
  const arrayKey = [];
  for (let i = 0; i < key.length; i++) {
    if (characterArray[key[i].charCodeAt(0) - adjust] === 1) {
      arrayKey.push(key[i]);
    }
    characterArray[key[i].charCodeAt(0) - adjust] = 0;
  }
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] === 1) {
      arrayKey.push(String.fromCharCode(i + adjust));
    }
  }
  //console.log(arrayKey);
  return arrayKey;
  // not terribly efficient but eh.  Object/map better.
}

function encode(text, key) {
  //console.log("encode", text, key);
  const adjust = "a".charCodeAt(0);
  const encodedArray = [];
  const arrayKey = keyToArray(key);
  const textSplit = text.split("");
  let iterator = 1;
  for (const character of textSplit) {
    if (/[^A-Za-z]/.test(character)) {
      encodedArray.push(character);
      iterator = 1;
      continue;
    } else {
      const isUpper = character === character.toUpperCase();
      const char = character.toLowerCase();
      const index = arrayKey.indexOf(char);
      const modIndex = (index + iterator) % arrayKey.length;
      const modCharacter = arrayKey[modIndex];
      if (isUpper) {
        encodedArray.push(modCharacter.toUpperCase());
      } else {
        encodedArray.push(modCharacter);
      }
      iterator++;
    }
  } // word
  return encodedArray.join("");
}

function decode(text, key) {
  //console.log("decode", text, key);
  const adjust = "a".charCodeAt(0);
  const decodedArray = [];
  const arrayKey = keyToArray(key);
  const textSplit = text.split("");
  let iterator = 1;
  for (const character of textSplit) {
    if (/[^A-Za-z]/.test(character)) {
      decodedArray.push(character);
      iterator = 1;
      continue;
    } else {
      const isUpper = character === character.toUpperCase();
      const char = character.toLowerCase();
      const index = arrayKey.indexOf(char);
      const modIndex = (((index - iterator) % arrayKey.length) + arrayKey.length) % arrayKey.length;
      const modCharacter = arrayKey[modIndex];
      if (isUpper) {
        decodedArray.push(modCharacter.toUpperCase());
      } else {
        decodedArray.push(modCharacter);
      }
      iterator++;
    }
  } // word
  return decodedArray.join("");
}

const characterCount = (string) => {
  iterator = 1;
  for (each of string) {
    iterator++;
  }
  return iterator;
}

// console.log(encode("This is an example.", "cipherabdfgjklmnoqstuvwxyz"));
// console.log(decode("Urew pu bq rzfsbtj.", "cipherabdfgjklmnoqstuvwxyz"));
// console.log(encode("cipher", "cipherabdfgjklmnoqstuvwxyz")); //ihrbfj
// console.log(decode("ihrbfj", "cipher"));
// console.log(encode("cipher", "cccciipppphhhhhhheeeerrrrr"));
// console.log(encode("This.tHis.thIs.thiS...","cipher")); ////"Urew.uRew.urEw.ureW..."
// console.log(decode("HVnfYfWttuCIWmAMyiE", "vuba")); //GYkaRuNlkpRYHvMYfqL
console.log(decode("gRTnKtLJGIpoVBw", "rdzwukq")); //fXOiRlCAWUcaEPi
console.log(decode("FRujpPhVK.R", "fiwbwwkrzz")) // YBqdjHrMT.K
console.log(decode("GIwOycgObmxPkPBUL gn", "egwiz")) // EGyKsgsDvzlAyIPBU el
console.log(decode("hIwogYJwyDm", "vko")) // gGsybRCmnWa
console.log(decode("uJ,UU.", "pdzxko")) //tH,TS.
console.log(decode("pklG,in,HH", "gqxwpubytzcl")) // witO,hk,FE
console.log(decode("Tvaid.s", "rdywwuy")) //Ssyet.q
console.log(decode("DrlJt,fOb.,wcGJ", "hitid")); //TpgCx,eMt.,vaCC
console.log(decode("GcnSH.anLEUNySjffPeOjIugTFqsCozAqTvuJ cxWiFTpaSw", "keuobkk")); // FbjNA.blHXXGqIoyxBmNxViqEMwxGakApRryD avSdOMgxHj

/*
'FbjNA.blHXXGqIoyxBmNxViqEMwxGakApRrD avSdOMgxHj' to equal 'FbjNA.blHXXGqIoyxBmNxViqEMwxGakApRryD avSdOMgxHj'
*/
console.log("original", characterCount("anLEUNySjffPeOjIugTFqsCozAqTvuJ"));
console.log("me", characterCount("blHXXGqIoyxBmNxViqEMwxGakApRrD"));
console.log("expected", characterCount("blHXXGqIoyxBmNxViqEMwxGakApRryD"));
