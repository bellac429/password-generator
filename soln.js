// Array of characters to choose for passwords
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
]

let passwordOne = document.querySelector("#password-one-el")
let passwordTwo = document.querySelector("#password-two-el")

// generate a random password using the above characters
function generatePassword() {
    console.log('generating password...')
    let password = '' // define an empty password to insert characters
    for (let i = 0; i < 15; i++) { // add 15 random characters
        // use random and floor functions to generate a random index of the character array
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

// display passwords in DOM
function displayPasswords() {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}

function copyPasswordOne() {
    // Get the text field
    let copiedPassword = document.getElementById("password-one-el")
    
    // Copy text field to clippboard using range object
    var range = document.createRange()
    range.selectNode(copiedPassword)
    window.getSelection().addRange(range)
    document.execCommand("copy")
    alert("Password has been copied!") // Send message to user saying password has been copied
}

function copyPasswordTwo() {
    // Get the text field 
    let copiedPassword = document.getElementById("password-two-el")
    
    // Copy text field to clippboard using range object
    var range = document.createRange()
    range.selectNode(copiedPassword)
    window.getSelection().addRange(range)
    document.execCommand("copy")
    alert("Password has been copied!") // Send message to user saying password has been copied
}