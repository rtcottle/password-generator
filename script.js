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
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '.', ',', '<', '>', '?', ';', ':', '~',];
  // var pattern = entry * [upper, lower, number, special];
  var entry = prompt("How many characters would you like your password to contain?", "Please choose from 8-128 characters");
    var passwordLength = Number(entry);
    // TODO: get this to Work 
    // if (Number = isNaN) {
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
  //check if it is NaN
  var upper = confirm("Click OK if you want UPPER-CASE letters. Click CANCEL if you do not.");
  var lower = confirm("Click OK if you want lower-case letters. Click CANCEL if you do not.");
  var number = confirm("Click OK if you want numbers. Click CANCEL if you do not.");
  var special = confirm("Click OK if you want special characters. Click CANCEL if you do not.");


  // TODO: fix if someone selects 'cancel' from the prompt box   
    // if (entry = true){
    //   alert("Please enter a number between 8-128")
    //   return;
    // }
    
    console.log(entry)
    // TODO: fix this statement
    // if (typeof entry != Number){
    //   alert("Must enter a number between 8-128");
    //   return;
    // }
    // This is the button in regards to upper-case. This also defines the parameters. 
    console.log(upper)
      // if (upper = true){
      //   //include in password options
      // };
      // if (upper = false){
      //   //exclude from password options
      // }

    // This is the button in regards to lower-case. This also defines the parameters. 
    console.log(lower)
      // if (lower = true){

      // };
    // This is the button in regards to numbers. This also defines the parameters.
    console.log(number)

      // if (number = true) {
      //   return numbers[Math.floor(Math.random()*numbers.length)];

      // };
    // This is the button in regards to special characters. This also defines the parameters. 
    console.log(special)

      // if (special = true){

      // };

      // for (var i = 0; i < entry; i++) {  
      //   return (pattern); 
      // };
// TODO: find out how to make the entry var be the parameters for length of the other variables. 
    // return;

    // TODO: make a function that displays the password 
  // displayPassword()
  // }    

// function displayPassword(entry){
}