const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^%=+-";


const allChar = upperCase + lowerCase + number + symbol

const myButton = document.getElementById("buttonClick")

myButton.addEventListener("click", () => {
    let password = "";

    while ( lenght >= password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordBox.value = password
})


function copyPass() {
    
  
    passwordBox.select()
    passwordBox.setSelectionRange(0, 99999) 
  

    navigator.clipboard.writeText(passwordBox.value);
    
    alert("Password berhasil disalin: " + passwordBox.value);
  }




// const buttonCopyPassword = document.getElementById("copyButton")

// buttonCopyPassword.addEventListener("click", => (){
//     passwordBox.select()
//     passwordBox.setSelectionRange(0, 99999)

//     navigator.clipboard.writeText(passwordBox.value)

//     alert("Password yang berhasil dibuat adala " + passwordBox.value)
// })




// copyPassword.addEventListener("click", () => {
//     passwordBox.select()
//     document.execCommand("copy")
// })

// function createPassword() {
//     let password = "";

//     while ( lenght > password.length) {
//         password += allChar[Math.floor(Math.random() * allChar.length)]
//     }

//     passwordBox.value = password
// }

// onclick.document.getElementById("password")

// let copyPassword = document.getElementById("copyPass")

// copyPassword.addEventListener("click", {    
//     passwordBox.select()
//     navigator.clipboard.writeText(passwordBox.value)
//     alert("Password Berhasil diCopy: " + passwordBox)
// }) 




// const copyButtonPass = document.getElementById("copyButton")

// copyButtonPass.addEventListener("click", ()=> {
//     const passwordBox = document.getElementById("password");
//     passwordBox.select()
//     navigator.clipboard.writeText(passwordBox.value)

//     alert("Password berhasil di Salin: " + passwordBox.value)

// })
