// Assignment code here

// password object declaration
var password = {
  pwd: "",
  len: 0,
  options: [],
  numOptions: 0
};

// updates count of chosen criteria
function ifOption(opt) {
  if (opt) {
    password.numOptions++;
  }
};

function reset() {
  // initialize password values
  password.pwd = "";
  password.len = 0;
  password.options = [];
  numOptions = 0;
};

function setConditions() {
  reset();

  // get the length from the user
  password.len = parseInt(window.prompt("Please enter a password length within the range [8, 128]."));
  
  // check if the length meets the requirements
  if (password.len >= 8 && password.len <= 128) {
    // get the criteria
    window.alert("Please choose your password criteria.");
    var opt = window.confirm("Would you like to include lowercase letters?");
    password.options.push(opt);
    ifOption(opt);
    opt = window.confirm("Would you like to include uppercase letters?");
    password.options.push(opt);
    ifOption(opt);
    opt = window.confirm("Would you like to include numbers?");
    password.options.push(opt);
    ifOption(opt);
    opt = window.confirm("Would you like to include special characters?");
    password.options.push(opt);
    ifOption(opt);
    
    // criteria check
    if (password.numOptions == 0) {
      window.alert("Please select at least one criteria.");
      setConditions();
    }
  }
  else {
    window.alert("Please choose a password length between 8 and 128.");
    setConditions();
  }
};

function randomize() {
  // strings of each criteria
  var characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#\$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  
  // while the password length is less than the set length
  if (password.pwd.length < password.len) {
    // loops through the character criteria
    for (var i = 0; i < password.options.length; i++) {
      // checks if is a chosen criteria
      if (password.options[i]) {
        // randomly choose characters from the chosen criteria
        password.pwd += characters[i][Math.floor(Math.random() * (characters[i].length))];
      }
    }
    randomize();
  }
}

// generates the random password
function generatePassword() {
  // set the criteria conditions
  setConditions();
  // randomize the password
  randomize();
  // return the generated password
  return password.pwd;
};

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
