//Generate a password when the button is clicked
//Present a series of prompts for password criteria
//Length of password
//At least 8 characters but no more than 128.
//Character types
//Lowercase
//Uppercase
//Numeric
//Special characters ($@%&*, etc)
//Code should validate for each input and at least one character type should be selected
//Once prompts are answered then the password should be generated and displayed in an alert or written to the page


//var specialChars = '@%+\\/\'!#$^?:,)(}{][~-_.';
//var numericChars = '0123456789';
//var lowerCasedChars = 'abcdefghijklmnopqrstuvwxyz';
//var upperCasedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';



// Function to prompt user for password options

function getPasswordOptions() {
  var passwordChars = prompt('How many characters would you like your password to contain?');

  if (passwordChars >= 8 && passwordChars <= 128) {
    var specialChars = confirm('Click ok to confirm including special characters.');
    var numericChars = confirm('Click OK to confirm number characters.');
    var lowercasedChars = confirm('Click OK to confirm lowercase characters.');
    var uppercasedChars = confirm('Click OK to confirm uppercase characters.');
      generatePassword(passwordChars, specialChars, numericChars, lowercasedChars, uppercasedChars);
  } else if (passwordChars < 8) {
      alert('Sorry, the password must be at least 8 characters long.');
  } else {
      alert('Sorry, the password must be less than 129 characters long.');
  }
}

// Function for getting a random element from an array
//function getRandom(password) {
  //for (var i = 0; i < passwordChars; i++) {
    //var randomIndex = Math.floor(Math.random() * availableChars.length);
    //password += availableChars[randomIndex];
  //}
//}
  

// Function to generate password with user input
function generatePassword(passwordChars, specialChars, numericChars, lowercasedChars, uppercasedChars) {
  var password = '';
  var availableChars = '';

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

  for (var i = 0; i < passwordChars; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

 //alert('Your generated password is: ' + password);
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generateBtn');

// Write password to the #password input
function writePassword() {
  var writtenPassword = generatePassword();
  var writtenPasswordText = document.querySelector('#password');
 
  writtenPasswordText.value = writtenPassword;
}

// Add event listener to generate button

generateBtn.addEventListener('click', getPasswordOptions);
generateBtn.addEventListener('click', writePassword);