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

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordChars = prompt('How many characters would you like your password to contain?');
  
  if (passwordChars >= 8 && passwordChars <= 128) {
    var includeSpecialChars = confirm('Click ok to confirm including special characters.');
    
    if(includeSpecialChars || includeSpecialChars === false) {
      var includeNumberChars = confirm('Click OK to confirm number characters.');

      if(includeNumberChars || includeNumberChars === false) {
        var includeLowercaseChars = confirm('Click OK to confirm lowercase characters.');

        if(includeLowercaseChars || includeLowercaseChars === false) {
          confirm('Click OK to confirm uppercase characters.');
    } else {
    }

    } else {
    }
  } else {

  }
 } else if (passwordChars < 8) {
    confirm('sorry, password must be more than 7 characters');
    } else {
    confirm('sorry, password must be less than 129 characters');
    
    
  } 
}


// Function for getting a random element from an array
//function getRandom(arr) {
   //for (var i = 0; i <= passwordLength; i++) {
    //var randomNumber = Math.floor(Math.random() * chars.length);
    //password += chars.substring(randomNumber, randomNumber +1);
   //}
  //}

  //getRandom()
  



// Function to generate password with user input
//function generatePassword() {
 
 
  
    
  //}


// Get references to the #generate element
//var generateBtn = document.querySelector('#generate');

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector('#password');
 
  //passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);
generateBtn.addEventListener('click', getPasswordOptions);