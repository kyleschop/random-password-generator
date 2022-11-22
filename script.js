var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordCriteria() {
  var userChoseNumbers = confirm("Would you like to add numbers?");
  var options = {
    userChoseNumbers: userChoseNumbers
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];
  if(userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
   
  }

  for(var i = 0; i < 4; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.lenght)])
  }

  return passwordArr.join("")

  /* var myNewPassword = "";
 
  var passwordLength = prompt("Choose a password length from 8 to 128.")
  console.log(passwordLength)
  parseInt(passwordLength)

  if(passwordLength > 128) {
    alert("Choose a lenght less then 129.");
  } else if(passwordLength < 8) {
    alert("Choose a length greater then 7.");
  } else {
    console.log(passwordLength)
  }

  var lowercase = confirm("Would you like to include lowercase letters?")
    console.log(lowercase)

  var uppercase = confirm("Would you like to include uppercase letters?")
    console.log(uppercase)


  var specialCharacter = confirm("Would you like to include special characters?")
    console.log(specialCharacter)

  

  return myNewPassword; */
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
