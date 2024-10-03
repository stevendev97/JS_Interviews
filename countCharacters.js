// Challenge: Write a JavaScript function named countCharacters that counts the number of 
// each character in a given string and returns an object with the characters as keys and 
// their counts as values.

// Requirements:

// The function should take a single string as an argument.

// The resulting object should have keys that are characters from the string, and 
// the values should be the number of times each character appears in the string.

// Ignore spaces and make the function case-insensitive (treat 'A' and 'a' as the same character).

// For example, countCharacters("Hello there!") should return something like 
// {h: 2, e: 3, l: 2, o: 1, t: 1, r: 1} (not counting the space and punctuation).


// const countCharacters = (str) => {
//     result = {}

//     // const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
//     const cleanStr = str.toLowercase().replace(/[\W_]/g, '')

//     for (let i = 0; i < cleanStr.length; i++) {
//         if (result[cleanStr[i]]) {
//             result[cleanStr[i]] += 1
//         } else {
//             result[cleanStr[i]] = 1
//         }
//     }

//     return result;
// }


const countCharacters = (str) => {

    const result = {};
    const cleanString = str.toLowerCase().replace(/[\W_]/g,''); 

    for (char of cleanString) {
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    }

    return result;
}

console.log(countCharacters('Hello there!'))
