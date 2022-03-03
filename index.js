//Create arrays to store letters, numbers, and characters
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialcharacters = ["!","@","#","$","%","^","&","*","(",")"];

//Create empty array to store password
let passwordArray;

//Grabs password length from user input and creates new array

function newArrayfromPassword () {
    let passwordlength = Number(document.getElementById("password").value);
    passwordArray = new Array(passwordlength);
    console.log(passwordArray);  
}


