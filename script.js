// Assignment code here
var SpecialCC = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var NumbersC = "0123456789".split('');
var LowercaseC = "abcdefghijklmnopqrstuvwxyz".split('');
var UppercaseC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var Characters = window.prompt("How many characters would you like your password to contain? Choose between 8 and 128.");
  var SpecialC = window.confirm("Click OK to confirm including special characters. ")
  var Numbers = window.confirm("Click OK to confirm including numeric characters. ")
  var Lowercase = window.confirm("Click OK to confirm including lowercase characters. ")
  var Uppercase = window.confirm("Click OK to confirm including uppercase characters. ")
  if (!Lowercase && !Uppercase && !Numbers && !SpecialC) {
    alert("Please select at least one character set to include in your password.");
    return "";
  }
  var passwordChars = "";
  if (Lowercase) {
    passwordChars += LowercaseC;
  }
  if (Uppercase) {
    passwordChars += UppercaseC;
  }
  if (Numbers) {
    passwordChars += NumbersC;
  }
  if (SpecialC) {
    passwordChars += SpecialCC;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);