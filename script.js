// Assignment code here

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var specials = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lows = "abcdefghijklmnopqrstuvwxyz";
var nums = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword() {

  // Prevent the screen from refreshing when whe button is clicked
  event.preventDefault();

  // Clear previous password from screen
  password.value === "";
  var randomString = "";

var passLength = prompt('How long would you like your password to be? (8-128 Characters)')
var lowerCase = confirm("Would you like to include lowercase letters in the password?")
var upperCase = confirm("Would you like to include uppercase letters in the password?")
var numbers = confirm("Would you like numbers in the password?")
var special = confirm("Would you like special characters in the password?")

if (passLength < 8 || passLength > 128) {
  alert("Password must be between 8 characters and 128 characters.");
  var passLength = prompt('How long would you like your password to be? (8-128 Characters)')
}

if (lowerCase) {
  optionsVariable += lows;
}

if (upperCase) {
  optionsVariable += caps;
}

if (numbers) {
  optionsVariable += nums;
}

if (special) {
  optionsVariable += specials;
}

for (var i = 0; i < passLength; i++) {
  randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  password.value = randomString;
    }
  passwordText.value = password;
  }
