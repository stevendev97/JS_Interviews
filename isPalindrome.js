// Challenge: Write a JavaScript function named isPalindrome that checks 
// whether a given string is a palindrome or not. 
// A palindrome is a word, phrase, number, or other sequence of characters that 
// reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// Requirements:

// The function should take a single string as an argument.
// It should return true if the string is a palindrome, and false otherwise.
// For example, isPalindrome("A man a plan a canal Panama") should return true.


// const isPalindrome = (inTake) => {
//     if (inTake.split("").reverse().join("") === inTake) {
//         return true
//     } else {
//         return false
//     }
// }

// Answer from ChatGPT 
// const isPalindrome = (inTake) => {
//     const cleanString = inTake.toLowerCase().replace(/[\W_]/g, ""); // This removes non-alphanumeric characters and converts to lowercase
//     const reversedString = cleanString.split("").reverse().join("");
//     return reversedString === cleanString;
// }

const isPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}



console.log(isPalindrome('racecar'))

