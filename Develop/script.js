// Assignment code here
var choiceArr = [];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*','(',')','+','=','[',']','.','?','/','`','<','>','\''];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'W', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Assign generate button to prompt window that loops through criteria
function generatePassword() {
  choiceArr = [];

  // 1. prompt the user with the password crieria 
  var numOfCharacters = window.prompt("How many characters would you like your password to contain?");
  // make sure it's between 8-28
  while (numOfCharacters < 8 || numOfCharacters > 128) {
    window.alert('Password length must be between 8 and 128 characters.')
    numOfCharacters = window.prompt("How many characters would you like your password to contain?");
  }
  // validate that it is a number
  while (isNaN(numOfCharacters)) {
    console.log('data type of \'' + numOfCharacters + '\':' + typeof numOfCharacters);
    window.alert('Password length must be provided as a number.')
    numOfCharacters = window.prompt("How many characters would you like your password to contain?");
  }
 
  //     b. lowercase, uppercase, numbers, special characters
  var includeNumbers = window.confirm("Would you like numbers in your password?");
  
  var includeUpperCase = window.confirm("Would you like to include Upper Case letters in your password?");
  
  var includeLowerCase = window.confirm("Would you like to include Lower Case letters in your password?");
  
  var includeSpecialCharacters = window.confirm("Would you like to include special characters in your password?");

  //  2. Validate the input.
  while (!includeNumbers && !includeLowerCase && !includeSpecialCharacters && !includeUpperCase) {
    window.alert('You must select at least one character type')
    includeNumbers = window.confirm("Would you like numbers in your password?");
    includeUpperCase = window.confirm("Would you like to include Upper Case letters in your password?");
    includeLowerCase = window.confirm("Would you like to include Lower Case letters in your password?");
    includeSpecialCharacters = window.confirm("Would you like to include special characters in your password?");
  }

  if (includeNumbers) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (includeLowerCase) {
    choiceArr = choiceArr.concat(lowerCaseArr)
  }
  if (includeSpecialCharacters) {
    choiceArr = choiceArr.concat(specialCharArr)
  }
  if (includeUpperCase) {
    choiceArr = choiceArr.concat(upperCaseArr)
  }
  

  //  3. Generate password based on criteria
 var password = '';
 for (var i=0; i < numOfCharacters; i++ ) {
   var randomLetter = Math.floor(Math.random() *choiceArr.length);
   password = password + choiceArr[randomLetter];
 }




  //  4. Display password to the page
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
