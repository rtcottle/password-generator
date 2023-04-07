// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

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

var UPPER_CASES = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var LOWER_CASES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var SPECIAL_CHARACTERS = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '.',
  ',',
  '<',
  '>',
  '?',
  ';',
  ':',
  '~',
];

function generatePassword(entry, upper, lower, number, special) {
  var entry = Number(
    prompt(
      'How many characters would you like your password to contain?',
      'Please choose from 8-128 characters'
    )
  );
  if (entry < 8) {
    alert('Must be more 7 characters');
    return;
  }
  if (entry > 128) {
    alert('Must be less than 129 characters');
    return;
  }

  // This is the button in regards to upper-case. This also defines the parameters.
  var upper = confirm(
    'Click OK if you want UPPER-CASE letters. Click CANCEL if you do not.'
  );
  if (!upper === false) {
  }

  // This is the button in regards to lower-case. This also defines the parameters.
  var lower = confirm(
    'Click OK if you want lower-case letters. Click CANCEL if you do not.'
  );

  // This is the button in regards to numbers. This also defines the parameters.
  var number = confirm(
    'Click OK if you want numbers. Click CANCEL if you do not.'
  );

  // This is the button in regards to special characters. This also defines the parameters.
  var special = confirm(
    'Click OK if you want special characters. Click CANCEL if you do not.'
  );

  //error if no character types selected.
  if (
    upper === false &&
    lower === false &&
    number === false &&
    special === false
  ) {
    alert('You must select a character type');
    return;
  }
  // confirming all selections from user
  // console.log(Number(entry));
  // console.log('upper case:', upper);
  // console.log('lower case:', lower);
  // console.log('numbers:', number);
  // console.log('specials:', special);

  const charNumber = Number(entry);
  var possibleChars = [];

  // logic to either include or exclude characters.
  if (upper != false) {
    possibleChars.push(UPPER_CASES);
  }
  if (lower != false) {
    possibleChars.push(LOWER_CASES);
  }
  if (number != false) {
    possibleChars.push(NUMBERS);
  }
  if (special != false) {
    possibleChars.push(SPECIAL_CHARACTERS);
  }
  // console.log('after logic', possibleChars);

  // make the nested arrays into one array
  var combinedArr = possibleChars.flat(1);
  console.log('combined array', combinedArr);

  function randomCharacters(combinedArr) {
    for (var i = 0, n = combinedArr.length; i < charNumber; i++) {
      const passwordChars = combinedArr[Math.floor(Math.random() * n)];
      // password.push(i);
      return passwordChars;
    } //entire array random character times the entry value.
    newArray(passwordChars);
  }

  function newArray(letter) {
    const arr = [];
    for (var i = 0; i < letter; i++) {
      arr.push(i);
    }
    return (password = arr.join(''));
  }

  randomCharacters(combinedArr);
  //TODO: create for loop that loops only as many times as requested password length - - include random character logic to pull from combined array
  //TODO: every time loop runs, grab random character from combined array. - - can make them into array then remove space in the array to be a password.
  //TODO: after character grabbed, add to generate password - then return password

  return password;
}
