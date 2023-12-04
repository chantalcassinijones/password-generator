// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt('How many characters would you like your password to contain?');

//check if user cancels prompt or enters characters other than a number
if (passwordLength === null || isNaN(passwordLength)) {
  alert('Invalid input. Please enter a valid number.');
  return null;
} 
//main logic to get user input which will kick if length is between 8-128
if (passwordLength >= 8 && passwordLength <= 128) {
    var specialChars = confirm('Click OK to confirm including special characters.');
    var numericChars = confirm('Click OK to confirm number characters.');
    var lowercasedChars = confirm('Click OK to confirm lowercase characters.');
    var uppercasedChars = confirm('Click OK to confirm uppercase characters.');

    //alert user if criteria are not respected  
  } else if (passwordLength < 8) {
      alert('Sorry, the password must be at least 8 characters long.');
  } else {
      alert('Sorry, the password must be 128 characters or less.');
  }
  // the code will return all of the options you selected for your password length and character types 
  return {
    passwordLength: passwordLength,
    specialChars: specialChars,
    numericChars: numericChars,
    lowercasedChars: lowercasedChars,
    uppercasedChars: uppercasedChars
  };
  }

  // Function to generate password with user input
function generatePassword(passwordLength, specialChars, numericChars, lowercasedChars, uppercasedChars) {
  //declare empty variable and can be filled with any of the following characters depending on the user imput 

  if (specialChars) {
    availableChars += '@%+\\/\'!#$^?:,)(}{][~-_.';
  }
  if (numericChars) {
    availableChars += '0123456789';
  }
  if (lowercasedChars) {
    availableChars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercasedChars) {
    availableChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  //declare empty password variable
  var password = '';
  //grabs random characters from those available based on parameters and adds them to password
  for (var i = 0; i < passwordLength; i++) {
    var randomChars = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomChars];
  }
  return password; //return generated password
}
// Get references to the #generate element 
var generateBtn = document.querySelector('#generate'); 
var writtenPassword = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  var passwordOptions = getPasswordOptions(); // when this fuction is called, first we activate the function getPasswordOptions to get user input
 //then we call on the generatePassword function to actually generate the password
  if (passwordOptions) {
  var generatedPassword = generatePassword(
    passwordOptions.passwordLength,
    passwordOptions.specialChars,
    passwordOptions.numericChars,
    passwordOptions.lowercasedChars,
    passwordOptions.uppercasedChars
  );
  writtenPassword.value = generatedPassword; // finally we write it in the textbox 
  }
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); // if button is clicked the function writePassword is called 


