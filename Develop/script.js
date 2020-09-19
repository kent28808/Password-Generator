// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// link button to alerts

// alert 1-How many characters would you like your password to contain? (08-128)
// If below 08 then alert says: "Password length must be at least 8 characters"
// If above 128 then alert says: "Password length must be less than 129 characters"

// if within range, series of prompts
// prompt 1 "Click OK to confirm including special characters"
// prompt 2 "Click OK to confirm including numeric characters"
// prompt 3 "Click OK to confirm including lowercase characters"
// prompt 4 "Click OK to confirm including uppercase characters"

// If user selects cancel to all prompts, alert "Must select at least one charcter type"

// Generated PW must then be written to page.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
