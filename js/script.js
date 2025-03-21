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

function playOddsAndEvens(user, cpu, choice) {
    let sum = user + cpu

    if (sum % 2 == 0 && choice.toLowerCase() == "pari") {
        
        return "Hai vinto! La somma del tuo numero " + user + " e quello del tuo avversario " + cpu + " è PARI!"

    } else if (sum % 2 != 0 && choice.toLowerCase() == "dispari") {

        return "Hai vinto! La somma del tuo numero " + user + " e quello del tuo avversario " + cpu + " è DISPARI!"
        
    } else {

        return "Mi dispiace, hai perso... La somma dei due numeri è " + sum + " e quindi non è " + choice.toUpperCase()

    }

}


const userChoice = prompt("scegli pari o dispari?")
let userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"))
const cpuNum = randomNum()

//bonus
while (userNum > 5 || userNum <= 0) {
    userNum = parseInt(prompt("Il valore inserito non va bene. Inserisci un numero compreso tra 1 e 5"))
}



console.log(userNum, cpuNum, userChoice)

console.log(playOddsAndEvens(userNum, cpuNum, userChoice))