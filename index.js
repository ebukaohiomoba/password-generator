//Create arrays to store letters, numbers, and characters
var upperCaseLetters = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnoqrstuvwxyz";
var numbers = "0123456789";
var specialcharacters = "!@#$%^&*()";
var possiblecharacters = upperCaseLetters + lowerCaseLetters + numbers + specialcharacters;

//Gets state of checkboxes
function generatePassword(){
    let isUpperCase = document.getElementById("uppercase").checked;
    console.log(isUpperCase);
    let isLowerCase = document.getElementById("lowercase").checked;
    console.log(isLowerCase);
    let isCharacter = document.getElementById("characters").checked;
    console.log(isCharacter);
    let isNumber = document.getElementById("numbers").checked;
    console.log(isNumber);

//Checks if all criteria have been selected
    if(isUpperCase==true && isLowerCase==true && isCharacter==true && isNumber==true){
        let passwordlength = Number(document.getElementById("password").value); 

        var newString = '';
        for (var i = 0; i <= passwordlength; i++){
            newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
        }
        console.log(newString);
        document.getElementById("passwordboxresult").value = newString;
    } else {function showAlertMessage() {

        // Original text container
        var successmsg = document.getElementById("successmsg");
        var errormsg = document.getElementById("errormsg");
        console.log(successmsg);
        console.log(errormsg);
        errormsg.innerHTML = "Please select all criteria for a secure password";
    
        // Hide original container by adding the hidden css class.
        successmsg.classList.add('hidden');
    
        // Show the error message by removing its default .hidden css class.
        errormsg.classList.remove('hidden');
    
       // Set up intervals then sets timer to 5000 milliseconds
        setTimeout(function() {
            errormsg.classList.add('hidden');
            successmsg.classList.remove('hidden');
        }, 5000);
    }
}
    
    // Call the function show alert message function
    showAlertMessage();
}

function copypassword() {
    // Get the text field//
    var copyText = document.getElementById("passwordboxresult");
    copyText.select();  
    document.execCommand('copy');
  
    //Alert the copied text //
    var copyalert = document.getElementById("clipboard");
    copyalert.innerHTML=("Copied");
    setTimeout(function() {
        copyalert.innerHTML=("Copy Password");
    }, 2000);
  }
 
function generaterandompassword(){
    //Check if boxes are checked
    document.getElementById("uppercase").checked = true;
    document.getElementById("lowercase").checked = true;
    document.getElementById("characters").checked = true;
    document.getElementById("numbers").checked = true;

    let passwordlength = Math.floor(Math.random() * 129);
    document.getElementById("password").value =  passwordlength;

    var newString = '';
    for (var i = 0; i <= passwordlength; i++){
        newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}


