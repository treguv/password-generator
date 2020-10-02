// Assignment code here
//Prompt the user to select their criterion
function generatePassword(){
  var passwordLength = window.prompt("How many characters? 8-128");
  var includeNumeric = window.confirm("Include numbers?");
  var includeLowerCase = window.confirm("Include lowercase?");
  var includeUpperCase = window.confirm("Include uppercase?");
  var includeSpecial = window.confirm("Include special characters?");
  //verify that it is a valid password
  if(verifyPassword(includeNumeric, includeLowerCase, includeUpperCase, includeSpecial)){
   
  }else{
    window.alert("Please select at least one criterion.");
    generatePassword();
  }

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
