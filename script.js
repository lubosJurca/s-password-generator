// // generator hesla


// function generate(){
//     for(let i = 0; i < 16; i++){
//     let randomIndex = Math.floor(Math.random() * characters.length)
//     solutionEl.innerText += characters[randomIndex]
//      }

// }



const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password = document.getElementById("result")




function randomIndex() {
    let number = Math.floor(Math.random() * characters.length)
    return characters[number]
}

function generate() {
    let generatedPassword = ""
    for (let i = 0; i < 16; i++) {
        generatedPassword += randomIndex()

    }

    password.innerText = generatedPassword
}


