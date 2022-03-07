//Create arrays to store letters, numbers, and characters
var upperCaseLetters = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnoqrstuvwxyz";
var numbers = "0123456789";
var specialcharacters = "!@#$%^&*()";
var possiblecharacters = upperCaseLetters + lowerCaseLetters + numbers + specialcharacters;

//Gets state of checkboxes


//Randomizes values 
function generatePassword(){
    let isUpperCase = document.getElementById("uppercase").checked;
    console.log(isUpperCase);
    let isLowerCase = document.getElementById("lowercase").checked;
    console.log(isLowerCase);
    let isCharacter = document.getElementById("characters").checked;
    console.log(isCharacter);
    let isNumber = document.getElementById("numbers").checked;
    console.log(isNumber);

    if(isUpperCase==true && isLowerCase==true && isCharacter==true && isNumber==true){

        //Grabs password length from user input and creates new array
        let passwordlength = Number(document.getElementById("password").value); 

        var newString = '';
        for (var i = 0; i <= passwordlength; i++){
            newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
        }
        console.log(newString);
        document.getElementById("passwordboxresult").value = newString;
    } else {function showAlertMessage() {

        // This is your original text container.
        var successmsg = document.getElementById("successmsg");
        var errormsg = document.getElementById("errormsg");
        console.log(successmsg);
        console.log(errormsg);
    
        // Now let's fill it with the specific error text (better using HTML here).
        errormsg.innerHTML = "Please select all criteria for a secure password";
    
        // Hide the original container by adding an .hidden css class.
        successmsg.classList.add('hidden');
    
        // Show the error message container by removing its default .hidden css class.
        errormsg.classList.remove('hidden');
    
       // Then set up an interval: as it ends, revert everything to its original state.
        setTimeout(function() {
            errormsg.classList.add('hidden');
            successmsg.classList.remove('hidden');
        }, 5000);
    }
}
    
    // Call the function.
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
    document.getElementById("uppercase").checked = true;
    document.getElementById("lowercase").checked = true;
    document.getElementById("characters").checked = true;
    document.getElementById("numbers").checked = true;

    //Grabs password length from user input and creates new array
    let passwordlength = Math.floor(Math.random() * 129);
    document.getElementById("password").value =  passwordlength;

    var newString = '';
    for (var i = 0; i <= passwordlength; i++){
        newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}


