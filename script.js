// Assignment code here
/*
*could make pwd an object

push checkedOptions into an array (always add regular characters too)
arr characters (strings of each set of special characters)
int totalLength of pwd
int tempLength = totalLength
string pwd = "";

*could be done through recursion with the while condition as the base condition
while(pwd.length() != totalLength)
{
  numOption.clear();
  for checkedOptions {
    int num push random(1, tempLength - (checkOptions.size() - 1))
    tempLength -= num
    
    for num {
      pwd += characters[random(0, characters.size() - 1)];
    }
  }
}

document.get = pwd;
 */

var password = {
  pwd: "",
  len: 0,
  options: [],
  numOptions: 0
};

function ifOption(opt) {
  if(opt){
    password.numOptions++;
  }
};

function setConditions() {
  password.pwd = "";
  password.len = 0;
  password.options = [];
  numOptions = 0;
  
  password.len = parseInt(window.prompt("Please enter a password length within the range [8, 128]."));
  if(password.len < 8 || password.len > 128) {
    window.prompt("Please choose a password length between 8 and 128.");
    setConditions();
  }

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

  if(password.numOptions == 0) {
    window.prompt("Please select at least one criteria.");
    setConditions();
  }
};

function generatePassword() {
  var characters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#\$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  
  setConditions();
  var tempLen = password.len;
  while(password.pwd.length < password.len) {
    for(var i = 0; i < password.options.length; i++) {
      if(password.options[i]) {
        var num = tempLen;
        if(tempLen > password.numOptions) {
          num = Math.floor(Math.random() * (tempLen - password.numOptions)) + 1;
        }
        tempLen -= num;
        for(var j = 0; j < num; j++){
          // add a random might need another for loop
          password.pwd += characters[i][j];
        }
      }
    }
  }

  console.log(password.pwd.length);
  //store in a temp string and then randomize
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
