// //PALINDROMA
// function isPalindrome(string) {

//     let reverseWord = ""

//     for (let i = string.length - 1; i >= 0; i--) {
        
//         reverseWord += string[i]

//     }

//     if (string.toLowerCase() == reverseWord.toLowerCase()) {
        
//         return "SI, la parola " + string.toLowerCase() + " risulta essere palindroma"

//     } else {

//         return "la parola " + string.toLowerCase() + " NON risulta essere palindroma"

//     }


// }

// let userWord = prompt("Inserisci la parola che vuoi controllare")

// console.log(isPalindrome(userWord))

// //PARI E DISPARI
function randomNum() {
    let result = Math.floor(Math.random() * 5 + 1)

    return result
}

function playOddsAndEvens(x, y) {
    let sum = x + y

    return sum
}


const userChoice = prompt("scegli pari o dispari?")
const userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"))
const cpuNum = randomNum()


console.log(userChoice, userNum, cpuNum)

console.log(playOddsAndEvens(3, 4))