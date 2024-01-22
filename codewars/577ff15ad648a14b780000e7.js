/**
 * 2024 Jan 22
 * https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
 * Welcome!
 */

function greet(language) {
  const languages = {
    "english": "Welcome",
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso",
  }
  if (languages[language]) {
    return languages[language]
  } else {
    return "Welcome"
  }
}