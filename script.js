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
  if (isNaN(Characters) || Characters < 8 || Characters > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }
  var SpecialC = window.confirm("Click OK to confirm including special characters. ")
  var Numbers = window.confirm("Click OK to confirm including numeric characters. ")
  var Lowercase = window.confirm("Click OK to confirm including lowercase characters. ")
  var Uppercase = window.confirm("Click OK to confirm including uppercase characters. ")
  if (!Lowercase && !Uppercase && !Numbers && !SpecialC) {
    alert("Please select at least one character set to include in your password.");
    return "";
  }
  var passwordC = "";
  if (Lowercase) {
    passwordC += LowercaseC;
  }
  if (Uppercase) {
    passwordC += UppercaseC;
  }
  if (Numbers) {
    passwordC += NumbersC;
  }
  if (SpecialC) {
    passwordC += SpecialCC;
  }

  var password = "";
  for (var i = 0; i < Characters; i++) {
    password += passwordC.charAt(Math.floor(Math.random() * passwordC.length));
  }
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);