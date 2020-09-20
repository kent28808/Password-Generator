// Variables
  var special;
  var numeric;
  var lowercase;
  var uppercase;

  // Values
  scharacters = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "<", ">", ":", "{", "}", "[", "]"];
  ncharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  lcharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  ucharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // greater than 8 and less than 129
  
 function generatePassword(){
   var password = '';
   for(var i = 0; i<l; i++){
     password += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return password;
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
  var characters = ("scharacters", "ncharacters", "lcharacters", "ucharacters")
