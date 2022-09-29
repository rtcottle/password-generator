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
// 3. ask about lower case letters
// 4. ask about numbers
// 5. ask about special characters
// 6. randomize characters
// 7. make sure each character type is present

// TODO: define password length (n) and how each var works inside the password variable. 

function generatePassword() {
  var entry = prompt("How many characters would you like your password to contain?", "Please choose from 8-128 characters");
    if (entry < 8){
      alert("Must be more 7 characters");
      return;
    }
    if (entry > 128){
      alert("Must be less than 129 characters");
      return;
    }
    // TODO: fix this statement
    // if (entry != Number){
    //   alert("Must enter a number between 8-128");
    //   return;
    // }
    var upper = confirm("Click OKAY if you want UPPER-CASE letters. Click CANCEL if you do not.")
    if (upper = false){
    }

    var lower = confirm("Click OKAY if you want lower-case letters. Click CANCEL if you do not.")

    var numbers = confirm("Click OKAY if you want numbers. Click CANCEL if you do not.")

    var special = confirm("Click OKAY if you want special characters. Click CANCEL if you do not.")




  }    
