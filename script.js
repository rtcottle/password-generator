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
// var output = [upper + lower + number + special]
// output is the entry value which includes the upper, lower, number, and special options set as true. 

function generatePassword() {
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ',', '<', '>', '?', ';', ':', '~',]
  var pattern = [upper, lower, number, special]
  var entry = prompt("How many characters would you like your password to contain?", "Please choose from 8-128 characters");
  // TODO: fix if someone selects 'cancel' from the prompt box   
    // if (entry = false){
    //   return;
    // }
    if (entry < 8){
      alert("Must be more 7 characters");
      return;
    }
    if (entry > 128){
      alert("Must be less than 129 characters");
      return;
    }
    console.log(entry)
    // TODO: fix this statement
    // if (typeof entry != Number){
    //   alert("Must enter a number between 8-128");
    //   return;
    // }
    var upper = confirm("Click OKAY if you want UPPER-CASE letters. Click CANCEL if you do not.")
    console.log(upper)
      if (upper = true){
        return (Math.floor(Math.random() * upperCase.length));
      }

    var lower = confirm("Click OKAY if you want lower-case letters. Click CANCEL if you do not.")
    console.log(lower)

      if (lower = true){

      }

    var number = confirm("Click OKAY if you want numbers. Click CANCEL if you do not.")
    console.log(number)

      if (number = true){
        // return Math.random(10)

      }
    var special = confirm("Click OKAY if you want special characters. Click CANCEL if you do not.")
    console.log(special)

      if (special = true){

      }

      for (var i = 0; i < entry; i++) {  
        return (pattern); 
      }
// TODO: find out how to make the entry var be the parameters for length of the other variables. 
    return;
  }    
