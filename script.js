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
password.upperCasedCharacters =confirm(`xlick OK to include uppercase`)
}


// Function for getting a random element from an array
function getRandom(arr) {
  var random =Math.floor(Math.random() * arr.length);
  var randomPassword = arr[random];
  return randomPassword;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var result =[];
  var Possiblecharacters =[];
  var validCharacters =[];
  if (password.specialCharacters){
    Possiblecharacters =+ getRandom(specialCharacters)
    validCharacters =+ getRandom(specialCharacters)
  }
  if (password.numericCharacters){
    Possiblecharacters =+ getRandom(numericCharacters)
    validCharacters =+ getRandom(numericCharacters)
  }
  if (password.lowerCasedCharacters){
    Possiblecharacters =+ getRandom(lowerCasedCharacters)
    validCharacters =+ getRandom(lowerCasedCharacters)
  }
  if(password.upperCasedCharacters){
    Possiblecharacters =+ getRandom(upperCasedCharacters)
    validCharacters =+ getRandom(upperCasedCharacters)
  }
  for (var i=0; i<password.length; i++){
    var Possiblecharacters =getRandom(Possiblecharacters);
    result.push(Possiblecharacters);
    // Created if statement to check that the runs thrugh all user input options
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);