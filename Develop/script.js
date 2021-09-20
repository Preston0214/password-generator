// // Assignment Code
var numberOfCharacters = 0;
var specialCharactersAllowed = false;
var numbersAllowed = false;
var lowerCaseAllowed = false;
var upperCaseAllowed = false;

function passwordCriteria(){
var askNumberOfCharacters = window.prompt("how many characters do you want?");

numberOfCharacters = parseInt(askNumberOfCharacters);
    console.log(numberOfCharacters);

var askSpecialCharactersAllowed = window.confirm("Do you want special characters?")

specialCharactersAllowed = askSpecialCharactersAllowed;
    console.log(specialCharactersAllowed);

var askLowerCaseAllowed = window.confirm("Do you want lowercase characters?")

lowerCaseAllowed = askLowerCaseAllowed;
    console.log(lowerCaseAllowed);

var askUpperCaseAllowed = window.confirm("Do you want uppercase characters?")

upperCaseAllowed = askUpperCaseAllowed;
    console.log(upperCaseAllowed);

var askNumbersAllowed = window.confirm("Do you want numbers?")

numbersAllowed = askNumbersAllowed;
    console.log(numbersAllowed);
}

function getSpecChar(){
    var symbols= ""
    if (specialCharactersAllowed){
        symbols= "!@#$%^&*()_+-={}[]|:;?<>,./";
    }
    return symbols;
}
function getNumbers(){
    var numbers= ""
    if (numbersAllowed){
        numbers= "1234567890";
    }
    return numbers;
}
function getLowerCase(){
    var lower= ""
    if (lowerCaseAllowed){
        lower= "abcdefghijklmnopqrstuvwxyz";
    }
    return lower;
}
function getUpperCase(){
    var upper= ""
    if (upperCaseAllowed){
        upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    return upper;
}

function passwordChar(){
    var characters= (getSpecChar()) + (getLowerCase()) + (getUpperCase()) + (getNumbers())
    return characters;
}

var generateBtn = document.querySelector("#generate");



function generatePassword(){
  passwordCriteria()
  var result= "";
  var characterSet = passwordChar();

  for (var i=0; i<numberOfCharacters; i++){
    result+= passwordChar(Math.floor(Math.random() * passwordChar.length))
}
return result;

}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


