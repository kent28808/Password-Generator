
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
  
// Password Generator
 function generatePassword(){
 // Arrays
  scharacters = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "<", ">", ":", "{", "}", "[", "]"];
  ncharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  lcharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  ucharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // greater than 8 and less than 129

   var userInput = prompt("How many characters would you like your password to contain? (08-128)");
   userInput = parseInt(userInput)
   if (userInput < 8 || userInput > 128 || isNaN(userInput)){
    alert("Password length must be 08 and 128 characters.")
    return;
  } 
  
  var store = [];
  var upperInput = confirm("Click OK to confirm including uppercase characters"); 
  if (upperInput){
    store += store.concat(ucharacters) 
  }
  var lowerInput = confirm("Click OK to confirm including lowercase characters");
  if (lowerInput){
    store += store.concat(lcharacters)
  } 
  var specialInput = confirm("Click OK to confirm including specialcase characters");
  if (specialInput){
    store += store.concat(scharacters)
  } 
  var numericInput = confirm("Click OK to confirm including numericcase characters");
  if (numericInput){
    store += store.concat(ncharacters)
  }  

  var fPassword = "";



  //  Random selection
  for (var i = 0; i < userInput; i++){
    var random = Math.floor(Math.random() * store.length);
    fPassword += store[random];
  }console.log(fPassword)
  var password = fPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
   

// Write password to the #password input
// function writePassword() {




