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


function generatePassword() {
  prompt("How many characters would you like your password to contain?", "Please choose from 8-128 characters");
    // if (generatePassword === typeof Number(< 8 || > 128)) {
    //   alert("false");
    // }
    confirm("Do you want UPPER-CASE letters?")
      // if (confirm == true) {
        
      // }
    confirm("Do you want lower-case letters?")
      // if (confirm == true) {
        
      // }
    confirm("Do you want numbers?")
      // if (confirm == true) {
        
      // }
    confirm("Do you want special characters?")
      // if (confirm == true) {
        
      // }
}





// if (generatePassword == true) {
//   alert("Would you like to have Upper-case letters in your password");
// }