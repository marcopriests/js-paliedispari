//PALINDROMA
function isPalindrome(string) {

    let reverseWord = ""

    for (let i = string.length - 1; i >= 0; i--) {
        
        reverseWord += string[i]

    }

    return reverseWord

}

let test = "peppe"

console.log(isPalindrome(test))