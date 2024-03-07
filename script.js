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
// Password requirement
var password ={
  length: 0,
  specialCharacters:"",
  numericCharacters:"",
  upperCasedCharacters:"",
  lowerCasedCharacters:""
};

// Function to prompt user for password options
function getPasswordOptions() {
  while(!password.length){
    password.length =parseInt(prompt(`Please enter your required password length between 8 and 128`));
    if (password.length < 8 || password.length > 128 || isNaN(password.length)) {
      alert (`Enter a valid length for password`);
      password.length = 0;
      // this alert ensures only the right length of entries can be entered.
    }
   
  }
  password.numericCharacters =confirm(`click OK to include numerical characters`);
  password.specialCharacters =confirm(`click OK to include special characters`);
  password.lowerCasedCharacters =confirm(`click OK to include lowercase`);
  password.upperCasedCharacters =confirm(`Click OK to include uppercase`);
}


// Function to get a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordOptions = {
    length: 0,
    specialCharacters: false,
    numericCharacters: false,
    upperCasedCharacters: false,
    lowerCasedCharacters: false
  };

  while (passwordOptions.length === 0) {
    passwordOptions.length = parseInt(prompt("Please enter your required password length between 8 and 128"));
    if (passwordOptions.length < 8 || passwordOptions.length > 128 || isNaN(passwordOptions.length)) {
      alert("Enter a valid length for password");
      passwordOptions.length = 0;
    }
  }

  passwordOptions.specialCharacters = confirm("Click OK to include special characters");
  passwordOptions.numericCharacters = confirm("Click OK to include numerical characters");
  passwordOptions.lowerCasedCharacters = confirm("Click OK to include lowercase characters");
  passwordOptions.upperCasedCharacters = confirm("Click OK to include uppercase characters");

  return passwordOptions;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var possibleCharacters = [];
  var result = [];

  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (options.numericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (options.lowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.upperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if (possibleCharacters.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(possibleCharacters);
    result.push(randomCharacter);
  }

  return result.join('');
}

// Get reference to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
