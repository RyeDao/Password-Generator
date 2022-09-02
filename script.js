//List of Special characters
var specialCharacters = [
  "~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","'","[","]","{","}","/","?",".",">",",","<","|"
]
var numericalCharacters = [
  "0","1","2","3","4","5","6","7","8","9"
]
var lowerCasedCharacters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
var upperCasedCharacters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

//Options for password
function getPasswordOptions(){
  var length = parseInt(prompt("How many characters would you like your password to have?"), 10);
  
  if(Number.isNaN(length)){
    alert("Password Length must be provided as a number")
    return null;
  }

  if(length < 8){
    alert("Password must be at least 8 characters long!")
    return null;
  }

  if(length > 128){
    alert("Password cannot exceed 128 characters!")
    return null;
  }


  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasNumericalCharacters = confirm(
    "Click OK to confirm including numerical characters"
  )

  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )

  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if(hasSpecialCharacters === false &&
     hasNumericalCharacters === false &&
     hasLowerCasedCharacters === false &&
     hasUpperCasedCharacters === false 
    ) {
      alert("Must select aft least one character type");
      return null
    }
    
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericalCharacters: hasNumericalCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    }

    return passwordOptions;

}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Generate password
function generatePassword() {
  var options = getPasswordOptions();
  var results = []

  var possibleOptions = []

  var fixedOptions = [];

  if(!options) return null;
  
  if(options.hasSpecialCharacters){
    possibleOptions = possibleOptions.concat(specialCharacters)
    fixedOptions.push(getRandom(specialCharacters));
  }
  
  if(options.hasNumericalCharacters){
    possibleOptions = possibleOptions.concat(numericalCharacters)
    fixedOptions.push(getRandom(numericalCharacters));
  }
  
  if(options.hasLowerCasedCharacters){
    possibleOptions = possibleOptions.concat(lowerCasedCharacters)
    fixedOptions.push(getRandom(lowerCasedCharacters));
  }
  
  if(options.hasUpperCasedCharacters){
    possibleOptions = possibleOptions.concat(upperCasedCharacters)
    fixedOptions.push(getRandom(upperCasedCharacters));
  }
  
  for(var index =0; index < options.length; index++){
    var possibleOption = getRandom(possibleOptions);
    
    results.push(possibleOption);
  }
  
  for(var index =0; index < fixedOptions.length; index++){
    results[index] = fixedOptions[index];
  }

  return results.join("")

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
