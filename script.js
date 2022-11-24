var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = [".", ",", "/", "?", "!", "@", "#", "$", "%", "&", "'"];

function getPasswordLength() {
  var passwordLength = prompt("Choose a password length from 8 to 128.")
  parseInt(passwordLength)
  if(passwordLength > 128) {
    alert("Choose a lenght less then 129.");
  } else if(passwordLength < 8) {
    alert("Choose a length greater then 7.");
  } else {
    return passwordLength;
  }
}

function getPasswordCriteria() {
  var passwordLength = getPasswordLength();
  var userChoseNumbers = confirm("Would you like to include numbers?");
  var userChoseUpperCase = confirm("Would you like to include uppercase letters?");
  var userChoseLowerCase = confirm("Would you like to include lowercase letters?");
  var userChoseSpecial = confirm("Would you like to include special characters?");
  var options = {
    passwordLength: passwordLength,
    userChoseNumbers: userChoseNumbers,
    userChoseUpperCase: userChoseUpperCase,
    userChoseLowerCase: userChoseLowerCase,
    userChoseSpecial: userChoseSpecial
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
    if(userChose.userChoseUpperCase) {
      availableChars = availableChars.concat(upperCase);
    }
    if(userChose.userChoseLowerCase) {
      availableChars = availableChars.concat(lowerCase);
    }
    if(userChose.userChoseSpecial) {
      availableChars = availableChars.concat(specialCharacter);
    }

    for(var i = 0; i < userChose.passwordLength; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }
  
  return passwordArr.join("");
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