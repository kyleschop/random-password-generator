function generatePassword() {
  var myNewPassword = "";
 
  var passwordLength = prompt("Choose a password length from 8 to 128.")
  console.log(passwordLength)
  parseInt(passwordLength)

  confirm("Would you like to include lowercase letters?")
  confirm("Would you like to include uppercase letters?")
  confirm("Would you like to include numeric characters?")
  confirm("Would you like to include special characters?")




  return myNewPassword;
}

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
