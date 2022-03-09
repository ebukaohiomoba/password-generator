//Create arrays to store letters, numbers, and characters
let upperCaseLetters = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
let lowerCaseLetters = "abcdefghijklmnoqrstuvwxyz";
let numbers = "0123456789";
let specialcharacters = "!@#$%^&*()<>?=~:;{}+";
let letters = upperCaseLetters + lowerCaseLetters;
let uppercaseandnumbers = upperCaseLetters + numbers;
let uppercaseandspecialcharacters = upperCaseLetters + specialcharacters;
let lowercaseandnumbers = lowerCaseLetters + numbers;
let uppercasenumbersandspecialcharacters = upperCaseLetters + numbers + specialcharacters;
let lowercasenumbersandspecialcharacters = lowerCaseLetters + numbers + specialcharacters;
let lettersandnumbers = letters + numbers;
let lowercaseandspecialcharacters = lowerCaseLetters + specialcharacters;
let lettersandspecialcharacters = letters + specialcharacters;
let numbersandcharacters = numbers + specialcharacters;
let possiblecharacters = upperCaseLetters + lowerCaseLetters + numbers + specialcharacters;

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
    let passwordlength = Number(document.getElementById("password").value); 


//Checks if criteria have been selected
if(isUpperCase==true && isLowerCase==false && isCharacter==false && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}    

if(isUpperCase==false && isLowerCase==true && isCharacter==false && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}    

if(isUpperCase==false && isLowerCase==false && isCharacter==true && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += specialcharacters[Math.floor(Math.random() * specialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}    

if(isUpperCase==false && isLowerCase==false && isCharacter==false && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += numbers[Math.floor(Math.random() * numbers.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}

if(isUpperCase==true && isLowerCase==true && isCharacter==false && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += letters[Math.floor(Math.random() * letters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==true && isLowerCase==false && isCharacter==false && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += uppercaseandnumbers[Math.floor(Math.random() * uppercaseandnumbers.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==true && isLowerCase==false && isCharacter==true && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += uppercaseandspecialcharacters[Math.floor(Math.random() * uppercaseandspecialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==false && isLowerCase==true && isCharacter==false && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lowercaseandnumbers[Math.floor(Math.random() * lowercaseandnumbers.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==false && isLowerCase==true && isCharacter==true && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lowercaseandspecialcharacters[Math.floor(Math.random() * lowercaseandspecialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==true && isLowerCase==true && isCharacter==false && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lettersandnumbers[Math.floor(Math.random() * lettersandnumbers.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==true && isLowerCase==true && isCharacter==true && isNumber==false){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lettersandspecialcharacters[Math.floor(Math.random() * lettersandspecialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==false && isLowerCase==false && isCharacter==true && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += numbersandcharacters[Math.floor(Math.random() * numbersandcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==false && isLowerCase==true && isCharacter==true && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += lowercasenumbersandspecialcharacters[Math.floor(Math.random() * lowercasenumbersandspecialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 


if(isUpperCase==true && isLowerCase==false && isCharacter==true && isNumber==true){
    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += uppercasenumbersandspecialcharacters[Math.floor(Math.random() * uppercasenumbersandspecialcharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==true && isLowerCase==true && isCharacter==true && isNumber==true){
        let newString = '';
        for (let i = 0; i <= passwordlength; i++){
            newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
        }
        console.log(newString);
        document.getElementById("passwordboxresult").value = newString;
} 

if(isUpperCase==false && isLowerCase==false && isCharacter==false && isNumber==false){
    //Show alert message
    function showAlertMessage() {

        // Original text container
        let successmsg = document.getElementById("successmsg");
        let errormsg = document.getElementById("errormsg");
        console.log(successmsg);
        console.log(errormsg);
        errormsg.innerHTML = "Please select criteria for a secure password";
    
        // Hide original container by adding the hidden css class.
        successmsg.classList.add('hidden');
    
        // Show the error message by removing its default .hidden css class.
        errormsg.classList.remove('hidden');
    
       // Set up intervals then sets timer to 5000 milliseconds
        setTimeout(function() {
            errormsg.classList.add('hidden');
            successmsg.classList.remove('hidden');
        }, 5000);
    }   showAlertMessage();

}
}

//Copies the contents of password box
function copypassword() {
    // Get the text field//
    let copyText = document.getElementById("passwordboxresult");
    copyText.select();  
    document.execCommand('copy');
  
    //Alert the copied text //
    let copyalert = document.getElementById("clipboard");
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

    //Defines max and min values
    let min = 8;
    let max = 128;

    //Creates random password length in bounds of min and max
    let passwordlength = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("password").value =  passwordlength;

    let newString = '';
    for (let i = 0; i <= passwordlength; i++){
        newString += possiblecharacters[Math.floor(Math.random() * possiblecharacters.length)];
    }
    console.log(newString);
    document.getElementById("passwordboxresult").value = newString;
}

function resetform(){
    //UnCheck all boxes 
    document.getElementById("uppercase").checked = false;
    document.getElementById("lowercase").checked = false;
    document.getElementById("characters").checked = false;
    document.getElementById("numbers").checked = false;
    document.getElementById("password").value =  '';
    document.getElementById("passwordboxresult").value = '';
}


