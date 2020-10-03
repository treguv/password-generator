// Assignment code here
//Prompt the user to select their criterion
function generatePassword(){
  var passwordLength = 0;
  while(passwordLength < 8 || passwordLength  > 128){
    passwordLength = window.prompt("How many characters? 8-128");
  }
  var includeNumeric = window.confirm("Include numbers?");
  var includeLowerCase = window.confirm("Include lowercase?");
  var includeUpperCase = window.confirm("Include uppercase?");
  var includeSpecial = window.confirm("Include special characters?");
  //verify that it is a valid password
  if(verifyPassword(includeNumeric, includeLowerCase, includeUpperCase, includeSpecial)){
    var password = createPassword(passwordLength, includeNumeric, includeLowerCase, includeUpperCase, includeSpecial);
  }else{
    //If none of the criterion were selected then rerun the 
    window.alert("Please select at least one criterion.");
    generatePassword();
  }
  return password;
}
//Create the user password
function createPassword(passwordLength, includeNumeric, includeLowerCase, includeUpperCase, includeSpecial){
  var numeric ="0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var thePassword = "";
  for(var i = 0; i < passwordLength; i++){
    var nextCharacter = getRandomNumber(1,5);
    console.log(nextCharacter)
    switch (nextCharacter){
      case 1:
        if(includeNumeric){
          thePassword = thePassword + numeric[getRandomNumber(0,numeric.length)];
        }else{
          i--;
        }
        break;
      case 2:
        if(includeLowerCase){
          thePassword = thePassword + lowerCase[getRandomNumber(0, lowerCase.length)];
        }else{
          i--;
        }
        break;
      case 3: 
        if(includeUpperCase){
          thePassword = thePassword + upperCase[getRandomNumber(0, upperCase.length)];
        }else{
          i--;
        }
        break;
      case 4:
        if(includeSpecial){
          thePassword = thePassword + special[getRandomNumber(0, special.length)];
        }else{
          i--;
        }
        break;
    } 
  }

  console.log(thePassword);
  console.log(thePassword.length);
  console.log(passwordLength);
  return thePassword;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 
//Verify that at least one thing was selected
function verifyPassword(numeric, lowerCase, upperCase, special){
  return(numeric || lowerCase || upperCase ||special); //Evaluates true if at least one is true
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//This is in a sense our main method
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
