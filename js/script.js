//PALINDROMA
function isPalindrome(string) {

    let reverseWord = ""

    for (let i = string.length - 1; i >= 0; i--) {
        
        reverseWord += string[i]

    }

    if (string.toLowerCase() == reverseWord.toLowerCase()) {
        
        return true

    } else {

        return false

    }


}

let test = "anna"

console.log(isPalindrome(test))