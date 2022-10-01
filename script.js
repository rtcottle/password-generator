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


function generatePassword() {
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ,'K' ,'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var ranUpCa = upperCase[Math.floor(Math.random() * upperCase.length)] //randomize above var
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var ranLoCa = lowerCase[Math.floor(Math.random() * lowerCase.length)] //randomize above var
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var ranNuCa = numbers[Math.floor(Math.random() * numbers.length)] //randomize above var
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ',', '<', '>', '?', ';', ':', '~',];
  var ranSpCh = specialCharacters[Math.floor(Math.random() * specialCharacters.length)] //randomize above var
  // var random = this[Math.floor(Math.random() * this.length)];
  // var pattern = entry * [upper, lower, number, special];
  var entry = Number(prompt("How many characters would you like your password to contain?", "Please choose from 8-128 characters"));
    // var passwordLength = Number(entry);
    // TODO: fix this rule!! 
    // if (isNaN(entry)) {
    //   alert("Not a number");
    //   return;
    // }
    if (entry < 8){
      alert("Must be more 7 characters");
      return;
    }
    if (entry > 128){
      alert("Must be less than 129 characters");
      return;
    };
    // TODO: fix this when a user hits "cancel" 
    if (entry = false){
      alert("Must be a number between 8-128")
      return;
    }

  // This is the button in regards to upper-case. This also defines the parameters. 
  var upper = confirm("Click OK if you want UPPER-CASE letters. Click CANCEL if you do not.");
  
    // This is the button in regards to lower-case. This also defines the parameters. 
  var lower = confirm("Click OK if you want lower-case letters. Click CANCEL if you do not.");

  // This is the button in regards to numbers. This also defines the parameters.
  var number = confirm("Click OK if you want numbers. Click CANCEL if you do not.");

  // This is the button in regards to special characters. This also defines the parameters. 
  var special = confirm("Click OK if you want special characters. Click CANCEL if you do not.");

    if (upper && lower && number && special === false){
      alert("You must select a character type")
      return;
    }
 
    console.log(Number(entry));
    console.log(upper);
    console.log(lower);
    console.log(number);
    console.log(special);
    console.log(typeof Number(entry))
    
      // for (var i = 0; i < entry; i++) {  
      //   return (pattern); 
      // };
// TODO: find out how to make the entry var be the parameters for length of the other variables. 
    // return;

    // TODO: make a function that displays the password 
  // displayPassword()
  // }    
function random (ranUpCa, ranLoCa, ranNuCa, ranSpCh){
  if (upper = true){
    for (var i = 0; i < ranUpCa.length; i++) {
    var ranUpCa = array[i];
  }
} 
  if (lower = true){
    for (var i = 0; i < ranLoCa.length; i++) {
    var ranLoCa = array[i];
  }
}
  if (number = true){
    for (var i = 0; i < ranNuCa.length; i++) {
    var ranNuCa = array[i];
  }
}
  if (special = true){
    for (var i = 0; i < ranSpCh.length; i++) {
    var ranSpCh = array[i];
  }
}
}


// function displayPassword(entry){
  return (random());
};