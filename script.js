// Assignment code here
var SpecialC = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var Numbers = "0123456789";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var Characters = window.prompt("How many characters would you like your password to contain? Choose between 8 and 128.");
  if (isNaN(Characters) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }
  var SpecialC = window.confirm("Click OK to confirm including special characters. ")
  var Numbers = window.confirm("Click OK to confirm including numeric characters. ")
  var Lowercase = window.confirm("Click OK to confirm including lowercase characters. ")
  var Uppercase = window.confirm("Click OK to confirm including uppercase characters. ")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);