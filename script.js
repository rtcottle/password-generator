// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TODO: Psuedocode:

// 1. need a prompt for length of password (between 8-128 characters)
// restrict to only numbers
// If not between 8-128, return false.
// 2. ask about CAPITAL LETTERS true/false
// if true, capital letters are an option for output. If false, they are not.
// 3. ask about lower case letters
// if true, lower letters are an option for output. If false, they are not.
// 4. ask about numbers
// if true, numbers are an option for output. If false, they are not.
// 5. ask about special characters
// if true, special characters are an option for output. If false, they are not.
// - if no selected types - error
// 6. randomize characters
// have first "true" character type in character[0], second in character[1], etc.
// reorder - randomize
// 7. each "true" character type is present
// loop each type of character that was selected.

// TODO: define password length (n) and how each var works inside the password variable.
// var output = [upper + lower + number + special]
// output is the entry value which includes the upper, lower, number, and special options set as true.

var UPPER_CASES = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var randomUpperCase =
  UPPER_CASES[Math.floor(Math.random() * UPPER_CASES.length - 1)]; //randomize above var
var LOWER_CASES = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var randomLowerCase =
  LOWER_CASES[Math.floor(Math.random() * LOWER_CASES.length)]; //randomize above var
var NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNumbers = NUMBERS[Math.floor(Math.random() * NUMBERS.length)]; //randomize above var
var SPECIAL_CHARACTERS = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ".",
  ",",
  "<",
  ">",
  "?",
  ";",
  ":",
  "~",
];
var randomSpecialCharacters =
  SPECIAL_CHARACTERS[Math.floor(Math.random() * SPECIAL_CHARACTERS.length)]; //randomize above var

function generatePassword() {
  var entry = Number(
    prompt(
      "How many characters would you like your password to contain?",
      "Please choose from 8-128 characters"
    )
  );
  // TODO: fix this. When they click cancel gives prompt.
  // TODO: fix so console.log displays user number with these rules
  // if (entry === false){
  //   alert("Please enter a number")
  //   return;
  // }
  // if (isNaN(entry)) {
  //   alert("Not a number");
  //   return;
  // }
  if (entry < 8) {
    alert("Must be more 7 characters");
    return;
  }
  if (entry > 128) {
    alert("Must be less than 129 characters");
    return;
  }

  // This is the button in regards to upper-case. This also defines the parameters.
  var upper = confirm(
    "Click OK if you want UPPER-CASE letters. Click CANCEL if you do not."
  );
  if (!upper === false) {
  }

  // This is the button in regards to lower-case. This also defines the parameters.
  var lower = confirm(
    "Click OK if you want lower-case letters. Click CANCEL if you do not."
  );

  // This is the button in regards to numbers. This also defines the parameters.
  var number = confirm(
    "Click OK if you want numbers. Click CANCEL if you do not."
  );

  // This is the button in regards to special characters. This also defines the parameters.
  var special = confirm(
    "Click OK if you want special characters. Click CANCEL if you do not."
  );

  //error if no character types selected.
  if (
    upper === false &&
    lower === false &&
    number === false &&
    special === false
  ) {
    alert("You must select a character type");
    return;
  }

  console.log(Number(entry));
  console.log(upper);
  console.log(lower);
  console.log(number);
  console.log(special);
  console.log(typeof Number(entry));

  var password = "";

  //creates single character for each loop type.
  for (var i = 0; i < entry; i++) {
    password += randomUpperCase;
  }
  for (var i = 0; i < entry; i++) {
    password += randomLowerCase;
  }
  for (var i = 0; i < entry; i++) {
    password += randomNumbers;
  }
  for (var i = 0; i < entry; i++) {
    password += randomSpecialCharacters;
  }

  var possibleChars = [];
  var combinedArr = possibleChars.concat(
    UPPER_CASES,
    LOWER_CASES,
    NUMBERS,
    SPECIAL_CHARACTERS
  );
  console.log(combinedArr);

  //TODO: find a way to include "true" arrays IN COMBINED ARRAY - - use if logic
  //TODO: combine above arrays into single array - - inside if statements
  //TODO: create for loop that loops only as many times as requested password length - - include random character logic to pull from combined array
  //TODO: every time loop runs, grab random character from combined array. - - can make them into array then remove space in the array to be a password.
  //TODO: after character grabbed, add to generate password - then return password

  // function random(
  //   randomUpperCase,
  //   randomLowerCase,
  //   randomNumbers,
  //   randomSpecialCharacters
  // ) {
  //   if (upper === true) {
  //     for (var i = 0; i < randomUpperCase.length; i++) {
  //       var randomUpperCase = randomUpperCase[i];
  //     }
  //   }
  //   if (lower === true) {
  //     for (var j = 0; j < randomLowerCase.length; j++) {
  //       var randomLowerCase = randomLowerCase[j];
  //     }
  //   }
  //   if (number === true) {
  //     for (var k = 0; k < randomNumbers.length; k++) {
  //       var randomNumbers = randomNumbers[k];
  //     }
  //   }
  //   if (special === true) {
  //     for (var l = 0; l < randomSpecialCharacters.length; l++) {
  //       var randomSpecialCharacters = randomSpecialCharacters[l];
  //     }
  //   }

  // return random(
  //   randomUpperCase,
  //   randomLowerCase,
  //   randomNumbers,
  //   randomSpecialCharacters
  // );
  // }
  return password;
}
