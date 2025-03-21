//PALINDROMA
function isPalindrome(string) {

    let reverseWord = ""

    for (let i = string.length - 1; i >= 0; i--) {
        
        reverseWord += string[i]

    }

    if (string.toLowerCase() == reverseWord.toLowerCase()) {
        
        return "SI, la parola " + string.toLowerCase() + " risulta essere palindroma"

    } else {

        return "la parola " + string.toLowerCase() + " NON risulta essere palindroma"

    }


}

let userWord = prompt("Inserisci la parola che vuoi controllare")

console.log(isPalindrome(userWord))

//PARI E DISPARI
